type SpeakButtonProps = {
  text: string
  label: string
  className?: string
}

export default function SpeakButton({ text, label, className = '' }: SpeakButtonProps) {
  function speak() {
    if (!('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-CH'

    const voices = window.speechSynthesis.getVoices()
    utterance.voice = voices.find(voice => voice.lang.toLowerCase() === 'de-ch')
      ?? voices.find(voice => voice.lang.toLowerCase().startsWith('de'))
      ?? null

    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      className={`speak-button ${className}`.trim()}
      onClick={speak}
      aria-label={`${label}: ${text}`}
      title={label}
    >
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M19 5a10 10 0 0 1 0 14" />
      </svg>
    </button>
  )
}
