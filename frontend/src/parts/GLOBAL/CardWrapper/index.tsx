import React from 'react'
import useStyles from './styles'
import { ICArdWrapperProps } from './types'

export default function CardWrapper({ children }: ICArdWrapperProps) {
  const { charactersCardsSection, charactersCardsWrapper } = useStyles()

  return (
    <section className={charactersCardsSection}>
      <div className={charactersCardsWrapper}>
        { children }
      </div>
    </section>
  )
}
