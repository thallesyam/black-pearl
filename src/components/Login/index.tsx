import { Button } from "../Button";

export function Login() {
  return (
    <section className="px-8 md:max-w-5xl mx-auto">
      <div className="flex justify-center items-center flex-col w-full bg-white px-8 min-h-audioContent rounded-lg">
        <p className="text-center text-sm text-black-dark m-11">
          Para ter o controle dos seus audios em apenas um lugar, clique no botão abaixo e 
          faça o login com uma das suas redes sociais!
        </p>

        <Button text="Faça o login" className="max-w-buttonLogin w-full h-12 text-xxs font-bold text-black" />
      </div>
    </section>
  )
}
