import Router from "next/router";
import { FormEvent, useState } from "react";
import { ToastContainer } from 'react-toastify';

import { api } from "../../services/api";
import { AudioInput } from "../AudioInput";
import { Button } from "../Button";
import { Input } from "../Input";
import { Loading } from "../Loading";
import { notify } from "../Notify";
import { Title } from "../Title";

type IFormAudio = {
  toggleCreateAudio: () => void
}

export function FormAudio({ toggleCreateAudio }: IFormAudio) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [timebox, setTimebox] = useState(0)
  const [file, setFile] = useState<File>({} as File)

  const inputClasses = 'text-sm text-black h-10 w-full rounded-lg px-2 outline-none focus:border-primary-dark focus:border-2'

  async function uploadAudioToCloud(file: any): Promise<any> {
    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'black-pearl')

    const audio = await api.post(`https://api.cloudinary.com/v1_1/thalles/video/upload`, formData)

    return audio.data
  }
  
  async function saveAudio(file: any) {
    const image = await uploadAudioToCloud(file)

    return {
      url: image.secure_url,
      name: image.original_filename,
      public_id: image.public_id
    }
  }
  

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData()

    if(!name || !timebox || !file) {
      setLoading(false)
      setError('Por favor preencha todos os campos')
      return
    }

    const audio = await saveAudio(file)

    formData.append('name', name)
    formData.append('timebox', String(timebox))
    formData.append('url', audio.url)
    formData.append('audio_name', audio.name)
    formData.append('public_id', audio.public_id)

    const { status } = await api.post('/audio/create', formData)

    setLoading(false)

    if(status !== 200) {
      notify("Ocorreu algum erro, tente novamente em alguns minutos!")
    }

    if(status === 200) {
      notify("Upload feito com sucesso!")

      setTimeout(() => {
        Router.reload()
      }, 2000)
    }
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
          isshowlabel="true"
          textlabel="Nome do audio" 
        />
          
        <Input 
          onChange={event => setTimebox(Number(event.target.value))} 
          name="timebox" 
          className={inputClasses} 
          isshowlabel="true"
          textlabel="Tempo aproximado" 
        />
      
        <AudioInput file={file} setFile={setFile} />

        {error !== '' && <p className="text-xs text-red-400 font-bold mt-2">{error}</p>}
        <Button text={loading ? <Loading /> : 'Salvar'} className="py-4 text-black-light text-sm bg-secundary" type="submit" />
      </section>

      <ToastContainer pauseOnHover={false} autoClose={2000} />
    </form>
  )
}
