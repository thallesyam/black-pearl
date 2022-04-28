import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { query as q } from 'faunadb'
import cloudinary from 'cloudinary/cloudinary'

import { fauna } from "../../../services/faunadb";

type IAudio = {
  id: string
  url: string
  name: string
  createdAt: number
  updatedAt: number
  public_id: string
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
  const { id } = request.body
  const { user: userLoggedIn } = await getSession({ req: request })

  if(method !== 'PUT') {
    return response.status(405).json({ message: 'Method Not Allowed' })
  }

  if(!userLoggedIn) {
    return response.status(401).json({ message: 'User Unauthorized' })
  }

  const user: IFaunaUser = await fauna.query(
    q.Get(q.Match(q.Index('user_by_email'), userLoggedIn.email))
  )

  const audios = user.data.audios.filter(audio => audio.id !== id) 
  const audioToDelete = user.data.audios.find(audio => audio.id === id) 
  
  cloudinary.uploader.destroy(
    `${audioToDelete.public_id}.mp3`,
    function(result) {
      console.log(result)
     }
  );

  await fauna.query(
    q.Update(
      user.ref,
      { data: { audios: [...audios] } },
    )    
  )

}