import React from 'react'
import useStyles from './styles'
import { CardWrapperProps } from './types'

export default function CardWrapper({ children }: CardWrapperProps) {
  const { charactersCardsSection, charactersCardsWrapper } = useStyles()

  return (
    <section className={charactersCardsSection}>
      <div className={charactersCardsWrapper}>
        { children }
      </div>
    </section>
  )
}
