import React, { ReactNode } from 'react'
import useStyles from './styles'

type CharacterDataProps = {
  children: ReactNode
}

export default function CharacterData({ children }: CharacterDataProps) {
  const { characterDataContainer } = useStyles()

  return (
    <section className={characterDataContainer}>
      { children }
    </section>
  )
}
