import { useAudio } from "../../contexts/AudioContext";
import { ButtonBackground } from "../ButtonBackground";

type IAudioImage = {
  url: string
  playing?: boolean
}

export function AudioImage({ url, playing = false }: IAudioImage) {
  const { handleClickPlay, handleClickPause } = useAudio()

  return (
    <ButtonBackground onClick={() => playing ? handleClickPause() :  handleClickPlay(url)} isLarge >
      {playing ? (
        <h1>Pause</h1>
      ) : (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.25 5.49999C13.2476 5.43254 13.2209 5.3682 13.175 5.31874L9.675 1.82499C9.65309 1.80046 9.62606 1.78103 9.59582 1.76807C9.56559 1.75511 9.53288 1.74894 9.5 1.74999H3.5C3.30109 1.74999 3.11032 1.82901 2.96967 1.96966C2.82902 2.11032 2.75 2.30108 2.75 2.49999V8C2.75 8.0663 2.77634 8.12989 2.82322 8.17677C2.87011 8.22366 2.9337 8.25 3 8.25C3.0663 8.25 3.12989 8.22366 3.17678 8.17677C3.22366 8.12989 3.25 8.0663 3.25 8V2.49999C3.25 2.43369 3.27634 2.3701 3.32322 2.32322C3.37011 2.27633 3.4337 2.24999 3.5 2.24999H9.25V5.49999C9.25 5.5663 9.27634 5.62989 9.32322 5.67677C9.37011 5.72366 9.4337 5.74999 9.5 5.74999H12.75V13.5C12.75 13.5663 12.7237 13.6299 12.6768 13.6768C12.6299 13.7237 12.5663 13.75 12.5 13.75H10.5C10.4337 13.75 10.3701 13.7763 10.3232 13.8232C10.2763 13.8701 10.25 13.9337 10.25 14C10.25 14.0663 10.2763 14.1299 10.3232 14.1768C10.3701 14.2237 10.4337 14.25 10.5 14.25H12.5C12.6989 14.25 12.8897 14.171 13.0303 14.0303C13.171 13.8897 13.25 13.6989 13.25 13.5V5.50624V5.49999ZM9.75 2.60624L12.3938 5.24999H9.75V2.60624ZM6.10625 9.275C6.06318 9.25387 6.01494 9.24558 5.96728 9.25112C5.91963 9.25666 5.87458 9.2758 5.8375 9.30625L4.4125 10.5H3C2.9337 10.5 2.87011 10.5263 2.82322 10.5732C2.77634 10.6201 2.75 10.6837 2.75 10.75V12.75C2.75 12.8163 2.77634 12.8799 2.82322 12.9268C2.87011 12.9737 2.9337 13 3 13H4.4125L5.8375 14.1937C5.88404 14.2298 5.94113 14.2496 6 14.25C6.03702 14.2514 6.07372 14.2427 6.10625 14.225C6.1495 14.2055 6.18614 14.1739 6.21167 14.1339C6.23721 14.094 6.25053 14.0474 6.25 14V9.5C6.25053 9.45257 6.23721 9.40603 6.21167 9.36606C6.18614 9.3261 6.1495 9.29445 6.10625 9.275ZM5.75 13.4687L4.6625 12.5562C4.61596 12.5202 4.55887 12.5004 4.5 12.5H3.25V11H4.5C4.55887 10.9996 4.61596 10.9798 4.6625 10.9437L5.75 10.0312V13.4687ZM9 11.75C9.00088 12.0874 8.92544 12.4207 8.77933 12.7248C8.63321 13.0289 8.42021 13.2961 8.15625 13.5062C8.11263 13.5432 8.05716 13.5632 8 13.5625C7.96268 13.5627 7.92581 13.5544 7.89222 13.5382C7.85862 13.5219 7.82921 13.4982 7.80625 13.4687C7.76509 13.4173 7.74594 13.3516 7.75296 13.286C7.75998 13.2205 7.79261 13.1604 7.84375 13.1187C8.04846 12.9542 8.21365 12.7458 8.32715 12.5089C8.44065 12.272 8.49957 12.0127 8.49957 11.75C8.49957 11.4873 8.44065 11.228 8.32715 10.9911C8.21365 10.7542 8.04846 10.5458 7.84375 10.3812C7.81473 10.362 7.79005 10.337 7.77128 10.3077C7.75251 10.2784 7.74006 10.2455 7.73474 10.2111C7.72941 10.1767 7.73133 10.1415 7.74036 10.1079C7.7494 10.0743 7.76535 10.043 7.78719 10.0159C7.80904 9.98879 7.8363 9.96656 7.86724 9.95061C7.89817 9.93466 7.93209 9.92535 7.96683 9.92327C8.00157 9.92118 8.03636 9.92638 8.06898 9.93851C8.1016 9.95065 8.13132 9.96946 8.15625 9.99375C8.42021 10.2039 8.63321 10.4711 8.77933 10.7752C8.92544 11.0793 9.00088 11.4126 9 11.75Z" fill="#A136D3"/>
        </svg>

      )}
    </ButtonBackground>
  )
}
