import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AudiosWrapper } from "../components/AudiosWrapper";
import { Audio } from "../components/Audio";
import { AddButton } from "../components/AddButton";
import { Login } from "../components/Login";

export default function Home() {
  const isLogged = true

  return (
    <Layout title="Home">
      <main className="flex flex-col justify-between h-screen">
        <Header />

        {isLogged ? (
          <AudiosWrapper>
            <section className="mt-8 flex flex-col gap-3 overflow-scroll pb-8 max-h-80">
              <Audio />
            </section>

            <AddButton />
          </AudiosWrapper>
        ) : (
          <Login />
        )}
        
        <Footer />
      </main>
    </Layout>
  )
}
