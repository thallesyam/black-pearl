import { getSession, useSession } from "next-auth/react";
import { fauna } from "../services/faunadb";
import { query as q } from 'faunadb'
import ReactPlayer from "react-player";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { AudiosWrapper } from "../components/AudiosWrapper";
import { FormAudio } from "../components/FormAudio";
import { Audio } from "../components/Audio";
import { AddButton } from "../components/AddButton";
import { Login } from "../components/Login";
import { Footer } from "../components/Footer";
import { Title } from "../components/Title";
import { useRef, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { GetServerSideProps } from "next";
import { useAudio } from "../contexts/AudioContext";

type IAudio = {
  showName: string
  timebox: string
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

type IHome = {
  user: IUser
}

export default function Home({ user }: IHome) {
  const { isLogged } = useUser()
  const { status } = useSession()
  const [isCreateAudio, setIsCreateAudio] = useState(false)
  const { audioPlaying } = useAudio()

  function toggleCreateAudio() {
    setIsCreateAudio(!isCreateAudio)
  }

  if(status == 'loading') {
    return <p>Loading</p>
  }

  return (
    <Layout title="Home">
      <main className="flex flex-col justify-between h-screen">
        <Header />

        {isLogged ? (
          <AudiosWrapper>
            {isCreateAudio ? (
              <FormAudio toggleCreateAudio={toggleCreateAudio}  />
            ) : (
              <section>
                <Title title="Meus Audios" />

                <section className="mt-8 flex flex-col gap-3 overflow-scroll pb-8 max-h-80">
                  {user.audios.map(audio => (
                    <div key={audio.id}>
                      <Audio title={audio.showName} isShowTimebox={Number(audio.timebox)} url={audio.url} />
                      <ReactPlayer url={audioPlaying} controls width={200} height={0} />
                    </div>

                  ))}
                </section>

                <AddButton onClick={() => toggleCreateAudio()} />           
              </section>
            )}
          </AudiosWrapper>
        ) : (
          <Login />
        )}
        
        <Footer />
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user: userLoggedIn } = await getSession({ req: context.req })


  const response: IFaunaUser = await fauna.query(
    q.Get(q.Match(q.Index('user_by_email'), userLoggedIn.email))
  )

  const user = {
    audios: response.data.audios
  }

  return {
    props: {
      user
    },
  }
}