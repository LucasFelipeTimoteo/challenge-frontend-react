import React from 'react'
import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'

import useStyles from './styles'
import { People } from '@material-ui/icons'
import { altCharacterDescription, altCharacterName } from './altTexts'
import { CardProps } from './types'

export default function Card({
  favorited,
  thumbnail,
  extension,
  characterName,
  characterDescription
}: CardProps) {
  const imagePath = `${thumbnail}.${extension}`

  const {
    addFavoritesButton,
    disfavorButton,
    cardMedia,
    cardTitle,
    cardWrapper,
    textContentWrapper
  } = useStyles()

  return (
    <>
      <CardContainer className={cardWrapper}>
        <CardMedia
          className={cardMedia}
          image={imagePath}
          title={`${characterName} image`}
        />

        <IconButton
          title={
            favorited ? "Disfavor character" : "Add character to favorites"
          }
          className={favorited ? disfavorButton : addFavoritesButton}
        >
          <People />
        </IconButton>

        <CardContent className={textContentWrapper}>
          <Typography
            variant="h2"
            component="p"
            title={`The character name is ${characterName}`}
            className={cardTitle}
          >
            {characterName || altCharacterName}
          </Typography>

          <Typography variant="body1" title={characterDescription}>
            {characterDescription || altCharacterDescription}
          </Typography>
        </CardContent>
      </CardContainer>
    </>
  )
}