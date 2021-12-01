import { useState } from 'react'

export default function useCardIsFocused() {
  const [cardIsFocused, setCardIsFocused] = useState(false)

  const toggleCardIsFocused = () => {
    setCardIsFocused(prev => !prev)
  }

  return { cardIsFocused, toggleCardIsFocused }
}
