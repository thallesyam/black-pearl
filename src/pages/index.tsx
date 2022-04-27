import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { AudiosWrapper } from "../components/AudiosWrapper";
import { FormAudio } from "../components/FormAudio";
import { Audio } from "../components/Audio";
import { AddButton } from "../components/AddButton";
import { Login } from "../components/Login";
import { Footer } from "../components/Footer";
import { Title } from "../components/Title";

export default function Home() {
  const isLogged = true
  const isCreateAudio = true

  return (
    <Layout title="Home">
      <main className="flex flex-col justify-between h-screen">
        <Header />

        {isLogged ? (
          <AudiosWrapper>
            {isCreateAudio ? (
              <FormAudio />
            ) : (
              <section>
                <Title title="Meus Audios" />

                <section className="mt-8 flex flex-col gap-3 overflow-scroll pb-8 max-h-80">
                  <Audio title="The Boy who Flew too High Natalie" />
                  <Audio title="Jack Hannaford Jake" />
                </section>

                <AddButton />           
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
