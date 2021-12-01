import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { IPagePresentationTextProps } from './types'

export default function PagePresentationText({
  charactersPage,
  characterPage,
  teamPage
}: IPagePresentationTextProps) {
  const charactersPageText = 'Explore the most powerful chacters in Marvel'
  const characterPageText = 'Discover all comics this character took part in'
  const teamPageText = 'Here is your own strike team choice'

  const { heroText } = useStyles()

  return (
    <Typography
      variant="h1"
      component="h2"
      className={heroText}
    >
      {charactersPage && charactersPageText}
      {characterPage && characterPageText}
      {teamPage && teamPageText}
    </Typography>
  )
}
