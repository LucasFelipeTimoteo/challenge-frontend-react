import React from 'react'
import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'

import wallpaper from '../../../assets/images/wallpaper.avif'
import useStyles from './styles'
import { People } from '@material-ui/icons'
import { CardProps } from './types'

export default function Card({ favorited }: CardProps) {
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
          image={wallpaper}
          title="Character image"
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
            title="Character name"
            className={cardTitle}
          >
            hero name
          </Typography>

          <Typography variant="body1" title="Character description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil rerum dolorum earum nobis quae sapiente incidunt quaerat dolore aliquid blanditiis.
          </Typography>
        </CardContent>
      </CardContainer>
    </>
  )
}