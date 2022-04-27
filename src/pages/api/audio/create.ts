import formidable from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
};


export default function handler(request: NextApiRequest, response: NextApiResponse) { 
  const { method } = request

  if(method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  const form = new formidable.IncomingForm()

  form.parse(request, (err, fields, files) => {
    console.log({
      fields,
      file: files.file
    })
  })

  return response.status(200).json({ message: 'OK'})
}