import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />

      <h1 className="text-white">Black Pearl!</h1>
    </Layout>
  )
}
