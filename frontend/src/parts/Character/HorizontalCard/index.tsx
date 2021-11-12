import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { useSeletedUser } from '../../../contexts/selectedCharacter'
import useCardImageFocused from '../../../hooks/useCardImageFocused'
import CardPhotoViwer from './CardPhotoViwer'
import ComicInfo from './ComicInfo'
import useStyles from './styles'
import { HorizontalCardProps } from './types'

export default function HorizontalCard({
  comic,
  comicName,
  comicDescription,
  comicThumbnailPath,
  comicThumbnailExtension,
  comicDate,
  characterComicsPageCount,
  comicPrintPrice
}: HorizontalCardProps) {
  const { cardImageFocused, toggleCardImageFocused } = useCardImageFocused()
  const { push } = useHistory()
  const { selectedCharacter } = useSeletedUser()
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`)

  const {
    horizontalCardContainer,
    horizontalCardInfo,
    horizontalCardMedia,
    conditionalComicHorizontalCardMedia,
    conditionalCardImageFocusedHorizontalCardMedia,
    conditionalComicHorizontalCardInfo,
    horizontalCardDescription
  } = useStyles()

  if (!('id' in selectedCharacter)) {
    push('/')
    return null
  }
  const headerCharacterPath = selectedCharacter
    ? `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`
    : ''

  const currentImage = comic
    ? `${comicThumbnailPath}.${comicThumbnailExtension}`
    : headerCharacterPath

  return (
    <CardContainer className={horizontalCardContainer}>
      <CardMedia
        image={currentImage}
        className={
          `${horizontalCardMedia}
           ${comic && conditionalComicHorizontalCardMedia}
           ${cardImageFocused && conditionalCardImageFocusedHorizontalCardMedia}`
        }
        onClick={toggleCardImageFocused}
      />

      <CardContent className={
        `${horizontalCardInfo}
         ${comic && conditionalComicHorizontalCardInfo}`
      }>
        <Typography variant="h2">
          {comic ? comicName : selectedCharacter.name}
        </Typography>

        {
          comic && (
            <ComicInfo
              comicDate={comicDate}
              characterComicsPageCount={characterComicsPageCount}
              comicPrintPrice={comicPrintPrice}
            />
          )
        }

        <Typography
          title={comicDescription || 'Description not provided'}
          variant="body2"
          className={horizontalCardDescription}
        >
          {(comic ? comicDescription : selectedCharacter.description) || 'Description not provided'}
        </Typography>

      </CardContent>
      <CardPhotoViwer
        comic={comic || false}
        cardImageFocused={cardImageFocused}
        toggleCardImageFocused={toggleCardImageFocused}
        query={query}
      />
    </CardContainer>
  )
}
