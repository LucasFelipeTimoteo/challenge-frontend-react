import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSeletedCharacter } from '../../../contexts/selectedCharacter/hooks/useSelectedCharacterProvider'
import useCardImageFocused from '../../../hooks/useCardImageFocused'
import CardPhotoViwer from './CardPhotoViwer'
import ComicInfo from './ComicInfo'
import useStyles from './styles'
import { IHorizontalCardProps } from './types'

const HorizontalCard = forwardRef<Element, IHorizontalCardProps>((
  {
    comic,
    comicName,
    comicDescription,
    comicThumbnailPath,
    comicThumbnailExtension,
    comicDate,
    characterComicsPageCount,
    comicPrintPrice,
    lastVisibleHorizontalCard
  },
  ref
) => {
  const { cardImageFocused, toggleCardImageFocused } = useCardImageFocused()
  const { selectedCharacter, loadingSelectedCharacter } = useSeletedCharacter()
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`)

  const {
    horizontalCardContainer,
    horizontalCardInfo,
    horizontalCardMedia,
    conditionalComicHorizontalCardMedia,
    focusedHorizontalCardMedia,
    conditionalComicHorizontalCardInfo,
    horizontalCardDescription
  } = useStyles()

  if (loadingSelectedCharacter && !('id' in selectedCharacter)) {
    return null
  }

  const headerCharacterPath =
    'id' in selectedCharacter &&
    `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`


  const currentImage =
    comic
      ? `${comicThumbnailPath}.${comicThumbnailExtension}`
      : headerCharacterPath

  return (
    <CardContainer className={horizontalCardContainer} ref={lastVisibleHorizontalCard ? ref : null}>
      <CardMedia
        image={currentImage || '/'}
        className={
          `${horizontalCardMedia}
           ${comic && conditionalComicHorizontalCardMedia}
           ${cardImageFocused && focusedHorizontalCardMedia}`
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
})

export default HorizontalCard
