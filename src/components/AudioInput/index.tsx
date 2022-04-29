import { Dispatch, SetStateAction, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { Audio } from '../Audio';

type IAudioInput = {
  setFile: Dispatch<SetStateAction<File>>
  file: File
}

export function AudioInput({ file, setFile }: IAudioInput) {
  const [uploadMessageError, setUploadMessageError] = useState('')
  const {getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } = useDropzone({
    accept: "",
    multiple: false,
    onDropAccepted: (acceptedFiles) => {
      if(!acceptedFiles[0].type.includes("audio")) {
        setUploadMessageError('Por favor selecione um arquivo do tipo audio')

        setFile({} as File)

        return
      }

      setFile(acceptedFiles[0])
    }
  });

  function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
    if(!isDragActive) {
      return <p className="text-xs text-black mt-2">Arraste arquivos aqui</p>
    }

    if(isDragReject) {
      return <p className="text-xs text-black mt-2">Arquivo não suportado.</p>
    }

    return <p className="text-xs text-black mt-2">Solte os arquivos aqui</p>
  }

  return (
    <>
      {file.name ? (
        <Audio title={file.name} isShowButtons={false} />
      ) : (
        <div 
          {...getRootProps({ 
            className: `
              w-full flex flex-col justify-center items-center gap-1 py-16 border-dashed border-primary-dark border-2	rounded-lg
              ${isDragAccept && 'border-green-500'} 
              ${isDragReject && 'border-red-400'}  
            `
          })}
        >
          <input {...getInputProps()} />
    
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-0 inline-block">
            <path d="M9.41406 3.6875H10.5859C10.6901 3.6875 10.7422 3.74167 10.7422 3.85V18.15C10.7422 18.2583 10.6901 18.3125 10.5859 18.3125H9.41406C9.3099 18.3125 9.25781 18.2583 9.25781 18.15V3.85C9.25781 3.74167 9.3099 3.6875 9.41406 3.6875Z" fill="#A136D3"/>
            <path d="M3.4375 10.2281H16.5625C16.6667 10.2281 16.7188 10.2823 16.7188 10.3906V11.6094C16.7188 11.7177 16.6667 11.7719 16.5625 11.7719H3.4375C3.33333 11.7719 3.28125 11.7177 3.28125 11.6094V10.3906C3.28125 10.2823 3.33333 10.2281 3.4375 10.2281Z" fill="#A136D3"/>
          </svg>

          {uploadMessageError !== '' ? (
            <p className="text-xs text-black mt-2">{uploadMessageError}</p>
          ) : (
            <>
              {renderDragMessage(isDragActive, isDragReject)}
            </>
          )}
    
        </div>
      )}
    </>

  )
}
