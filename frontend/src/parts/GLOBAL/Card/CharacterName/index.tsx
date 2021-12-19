import { Typography } from '@material-ui/core'
import React from 'react'
import { altCharacterName } from '../altTexts'
import { ICharacterNameProps } from './types'
import useStyles from './styles'

export default function CharacterName({
  characterName
}: ICharacterNameProps) {
  const { cardTitle } = useStyles()

  return (
    <Typography
      variant="h2"
      component="p"
      title={`The character name is ${characterName}`}
      className={cardTitle}
      data-testid="characterName"
    >
      {characterName || altCharacterName}
    </Typography>
  )
}
