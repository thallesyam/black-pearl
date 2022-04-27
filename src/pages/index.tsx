import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { AudiosWrapper } from "../components/AudiosWrapper";
import { FormAudio } from "../components/FormAudio";
import { Audio } from "../components/Audio";
import { AddButton } from "../components/AddButton";
import { Login } from "../components/Login";
import { Footer } from "../components/Footer";
import { Title } from "../components/Title";
import { useState } from "react";

export default function Home() {
  const isLogged = true
  const [isCreateAudio, setIsCreateAudio] = useState(false)

  function toggleCreateAudio() {
    setIsCreateAudio(!isCreateAudio)
  }

  return (
    <Layout title="Home">
      <main className="flex flex-col justify-between h-screen">
        <Header />

        {isLogged ? (
          <AudiosWrapper>
            {isCreateAudio ? (
              <FormAudio toggleCreateAudio={toggleCreateAudio} />
            ) : (
              <section>
                <Title title="Meus Audios" />

                <section className="mt-8 flex flex-col gap-3 overflow-scroll pb-8 max-h-80">
                  <Audio title="The Boy who Flew too High Natalie" />
                  <Audio title="Jack Hannaford Jake" />
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
