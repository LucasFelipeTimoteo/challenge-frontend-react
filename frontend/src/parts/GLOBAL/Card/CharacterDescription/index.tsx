import { Typography } from '@material-ui/core'
import React from 'react'
import { altCharacterDescription } from '../altTexts'
import { ICharacterDescriptionProps } from './types'
import useStyles from './styles'

export default function CharacterDescription({
  characterDescription,
  cardIsFocused
}: ICharacterDescriptionProps) {
  const { cardDescriptionFullSizeMode } = useStyles()

  const parsedCharacterDescription = characterDescription.trim()
  return (
    <Typography
      variant="body1"
      title={parsedCharacterDescription || altCharacterDescription}
      className={`${cardIsFocused && cardDescriptionFullSizeMode}`}
    >
      {parsedCharacterDescription || altCharacterDescription}
    </Typography>
  )
}
