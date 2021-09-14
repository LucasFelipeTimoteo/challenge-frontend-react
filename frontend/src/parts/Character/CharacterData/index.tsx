import React from 'react'
import useStyles from './styles'
import { CharacterDataProps } from './types'

export default function CharacterData({ children }: CharacterDataProps) {
  const { characterDataContainer } = useStyles()

  return (
    <section className={characterDataContainer}>
      { children }
    </section>
  )
}
