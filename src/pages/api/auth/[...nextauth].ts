import NextAuth from 'next-auth'
import { query as q } from 'faunadb'
import GoogleProvider from "next-auth/providers/google";

import { fauna } from '../../../services/faunadb'


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  
  callbacks: {
    signIn: async ({ user }) => {
      const { email, image, name } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection('users'), { data: { email, image, name, audios: [] } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        )

        return true
      } catch (error) {}
    },
  },
})