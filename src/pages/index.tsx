import { MutableRefObject, useEffect, useRef, useState } from "react";
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
import { useUser } from "../contexts/UserContext";
import { GetServerSideProps } from "next";
import { useAudio } from "../contexts/AudioContext";
import { Loading } from "../components/Loading";

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
  const { audioPlaying, audioEnded } = useAudio()
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCreateAudio, setIsCreateAudio] = useState(false)
  const audioRef: MutableRefObject<ReactPlayer> = useRef(null)

  function onEnded() {
    const playlist = user.audios.map(audio => audio.url)
  
    playlist.map((audio, index) => {
      if(audio === audioPlaying) {
        audioEnded(playlist, index)
      }
    })
  }

  function toggleCreateAudio() {
    setIsCreateAudio(!isCreateAudio)
  }

  return (
    <Layout title="Home">
      <main className="flex flex-col justify-between h-screen">
        <Header audiosLength={user?.audios.length} />

        {status === 'loading' ? (
          <Loading />
        ) : (
          <>
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
                      <ReactPlayer
                        ref={audioRef}
                        url={audio.url} 
                        style={{ display: 'none' }} 
                        playing={audioPlaying === audio.url} 
                        onEnded={onEnded} 
                        onProgress={(progress) => {
                          setPlayed(progress.playedSeconds);
                        }}
                        onDuration={(duration) => {
                          const minutes = duration / 60
                          const seconds = minutes % 60

                          setDuration(seconds)
                        }}
                      />

                      <Audio
                        videoId={audio.id} 
                        title={audio.showName} 
                        url={audio.url}
                        currentTime={played}
                        videoTime={duration}
                      />
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
          </>
        )}


        
        <Footer />
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getSession({ req: context.req })

  if (!user) {
    return {
      props: {}
    }
  }

  const response: IFaunaUser = await fauna.query(
    q.Get(q.Match(q.Index('user_by_email'), user?.user.email))
  )

  const data = {
    audios: response.data.audios
  }

  return {
    props: {
      user: data
    },

  }
}