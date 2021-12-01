import { CardMedia } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { IHorizontalCardMediaProps } from './types'

export default function HorizontalCardMedia({
  comicThumbnailPath,
  comicThumbnailExtension,
  selectedCharacter,
  cardImageFocused,
  toggleCardImageFocused,
  comic
}: IHorizontalCardMediaProps) {

  const {
    comicPageHorizontalCardMedia,
    focusedHorizontalCardMedia,
    horizontalCardMedia
  } = useStyles()

  const headerCharacterPath =
    'id' in selectedCharacter &&
    `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`

  const currentImage = comic ?
    `${comicThumbnailPath}.${comicThumbnailExtension}`
    : headerCharacterPath
    
  return (
    <CardMedia
      image={currentImage || '/'}
      className={
        `${horizontalCardMedia}
       ${comic && comicPageHorizontalCardMedia}
       ${cardImageFocused && focusedHorizontalCardMedia}`
      }
      onClick={toggleCardImageFocused}
    />
  )
}
