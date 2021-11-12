import { useState } from "react"

export default function useCardImageFocused() {
  const [cardImageFocused, setCardImageFocused] = useState(false)

  const toggleCardImageFocused = () => {
    setCardImageFocused(prev => !prev)
  }

  return {
    cardImageFocused,
    toggleCardImageFocused
  }
}