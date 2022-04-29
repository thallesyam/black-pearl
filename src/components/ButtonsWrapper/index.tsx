import Router from "next/router";
import { ToastContainer } from "react-toastify";
import { api } from "../../services/api";
import { ButtonBackground } from "../ButtonBackground";
import { notify } from "../Notify";

type IButtonsWrapper = {
  videoId: string
}

export function ButtonsWrapper({ videoId }: IButtonsWrapper) {
  async function handleDeleteAudio() {
    const { status } = await api.put('/audio/delete', {
      id: videoId
    })

    console.log(status)

    if(status !== 200) {
      notify('Ocorreu algum erro, tente novamente em alguns minutos!')
    }


    notify('Audio deletado com sucesso')
    Router.reload()
  }

  return (
    <section className="flex items-center gap-1">
      <ButtonBackground onClick={handleDeleteAudio}>
        <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.8125 1.4375H2.75C2.78437 1.4375 2.8125 1.40938 2.8125 1.375V1.4375H5.1875V1.375C5.1875 1.40938 5.21562 1.4375 5.25 1.4375H5.1875V2H5.75V1.375C5.75 1.09922 5.52578 0.875 5.25 0.875H2.75C2.47422 0.875 2.25 1.09922 2.25 1.375V2H2.8125V1.4375ZM6.75 2H1.25C1.11172 2 1 2.11172 1 2.25V2.5C1 2.53437 1.02812 2.5625 1.0625 2.5625H1.53437L1.72734 6.64844C1.73984 6.91484 1.96016 7.125 2.22656 7.125H5.77344C6.04063 7.125 6.26016 6.91563 6.27266 6.64844L6.46562 2.5625H6.9375C6.97188 2.5625 7 2.53437 7 2.5V2.25C7 2.11172 6.88828 2 6.75 2ZM5.71328 6.5625H2.28672L2.09766 2.5625H5.90234L5.71328 6.5625Z" fill="#A136D3"/>
        </svg>
      </ButtonBackground>

      <ToastContainer pauseOnHover={false} autoClose={2000} />
    </section>
  )
}
