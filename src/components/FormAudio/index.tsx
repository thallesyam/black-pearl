import { FormEvent, useState } from "react";
import { AudioInput } from "../AudioInput";
import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

type IFormAudio = {
  toggleCreateAudio: () => void
}

export function FormAudio({ toggleCreateAudio }: IFormAudio) {
  const [name, setName] = useState('')
  const [timebox, setTimebox] = useState(0)
  const [file, setFile] = useState<File>({} as File)
  const inputClasses = 'text-sm text-black h-10 w-full rounded-lg px-2 outline-none focus:border-primary-dark focus:border-2'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log({
      name,
      timebox,
      file
    })

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <Title title="Adicione um audio" />
        
        <a className="text-primary-dark cursor-pointer transition-all  hover:underline " onClick={() => toggleCreateAudio()}>Retornar</a>
      </div>

      <section className="mt-8 flex flex-col gap-6">
        <Input 
          onChange={event => setName(event.target.value)} 
          name="name" 
          className={inputClasses} 
          isLabel 
          textlabel="Nome do audio" 
        />
          
        <Input 
          onChange={event => setTimebox(Number(event.target.value))} 
          name="timebox" 
          className={inputClasses} 
          isLabel 
          textlabel="Tempo aproximado" 
        />
      
        <AudioInput file={file} setFile={setFile} />

        <Button text="Salvar" className="py-4 text-black-light text-sm bg-secundary" type="submit" />
      </section>
    </form>
  )
}