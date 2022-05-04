import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import formidable from 'formidable'
import moment from 'moment'
import cloudinary from 'cloudinary/cloudinary'
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
      const { name, timebox, url, public_id, audio_name } = fields
  
      if(!name || !timebox || !url || !public_id || !audio_name) {
        return response.status(400).json({ message: 'Please fill all fields' })
      }

      const audio = {
        url,
        name: audio_name,
        public_id
      }
      
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
    form.parse(request, async (err, fields, files) => {
      const { public_id } = fields
  
      await cloudinary.v2.uploader.destroy(
        public_id,
        { resource_type : 'video' }
      );

      return response.status(500).json({ message: 'Internal server error' })
    })
  }
}