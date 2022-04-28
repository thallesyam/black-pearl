type IProgressBar = {
  percentage: number
  isAudioPlaying: boolean
}

export function ProgressBar({ percentage, isAudioPlaying }: IProgressBar) {
  return (
    <div className="w-28 md:w-96 bg-gray-200 rounded-full h-2.5 dark:bg-white">
      <div className="bg-primary-dark h-2.5 rounded-full" style={{ width: `${isAudioPlaying ? `${percentage}%` : '0%'}` }}></div>
    </div>
  )
}
