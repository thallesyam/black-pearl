import formidable, { File } from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'
import '../../../services/cloudinary'
import cloudinary from 'cloudinary/cloudinary'

export const config = {
  api: {
    bodyParser: false,
  },
};

async function uploadAudioToCloud(file: File): Promise<any> {

  const audio = cloudinary.v2.uploader.upload(
    file.filepath,
    { resource_type: "auto", folder: 'black-pearl' }, 
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
  }
}


export default function handler(request: NextApiRequest, response: NextApiResponse) { 
  const { method } = request

  if(method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  const form = new formidable.IncomingForm()

  form.parse(request, async (err, fields, files) => {
    const { name, timebox } = fields
    const audio = await saveAudio(files.file as File)
  })

  return response.status(200).json({ message: 'OK'})
}