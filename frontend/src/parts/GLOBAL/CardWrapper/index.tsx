import React, { ReactNode } from 'react'
import useStyles from './styles'

type ICArdWrapperProps = {
  children: ReactNode
}

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
