import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import cloudinary from 'cloudinary/cloudinary'
import formidable, { File } from 'formidable'
import moment from 'moment'
import { v4 as uuid } from 'uuid'
import { query as q } from 'faunadb'

import '../../../services/cloudinary'
import { fauna } from '../../../services/faunadb'

export const config = {
  api: {
    bodyParser: false,
  },
};

type IAudio = {
  id: string
  url: string
  name: string
  createdAt: number
  updatedAt: number
}

type IUser = {
  audios: IAudio[]
}

type IFaunaUser = {
  ref: any
  data: IUser
}

async function uploadAudioToCloud(file: File): Promise<any> {

  const audio = cloudinary.v2.uploader.upload_large(
    file.filepath,
    { resource_type: "video", folder: 'black-pearl' }, 
    (error: Error, result: any) => {
      if (!!error) {
        console.log('Audio error: ', error.message)
      }

      return result
    }
  )

  return await audio
}

async function saveAudio(file: File) {
  const image = await uploadAudioToCloud(file)
  
  return {
    url: image.secure_url,
    name: image.original_filename,
    public_id: image.public_id
  }
}


export default async function handler(request: NextApiRequest, response: NextApiResponse) { 
  const { method } = request
  const { user: userLoggedIn } = await getSession({ req: request })

  if(!userLoggedIn) {
    return response.status(401).json({ message: 'User Unauthorized' })
  }
  
  if(method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  const form = new formidable.IncomingForm()

  try {
    form.parse(request, async (err, fields, files) => {
      const { name, timebox } = fields
  
      if(!name || !timebox) {
        return response.status(400).json({ message: 'Please fill all fields' })
      }
  
      if(!files.file) {
        return response.status(400).json({ message: 'Audio is required' })
      }
  
      const audio = await saveAudio(files.file as File)
  
      const data = {
        id: uuid(),
        ...audio,
        showName: name,
        timebox,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      }
  
      const user: IFaunaUser = await fauna.query(
        q.Get(q.Match(q.Index('user_by_email'), userLoggedIn.email))
      )
      
      await fauna.query(
        q.Update(
          user.ref,
          { data: { audios: [...user.data.audios, data] } },
        )    
      )
      
      return response.status(200).json({ message: 'Upload realizado com sucesso'})
    })
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error' })
  }

}