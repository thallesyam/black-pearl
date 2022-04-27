import { AudioInput } from "../AudioInput";
import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

export function FormAudio() {
  const inputClasses = 'text-sm text-black h-10 w-full rounded-lg px-2 outline-none focus:border-primary-dark focus:border-2'
  return (
    <form>
      <Title title="Adicione um audio" />

      <section className="mt-8 flex flex-col gap-6">
        <Input name="name" className={inputClasses} isLabel textLabel="Nome do audio" />
        <Input name="timebox" className={inputClasses} isLabel textLabel="Tempo aproximado" />
      
        <AudioInput />

        <Button text="Salvar" className="py-4 text-black-light text-sm" />
      </section>
    </form>
  )
}
