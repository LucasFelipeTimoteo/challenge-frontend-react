import {
  Card as CardContainer,
  CardContent, Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSeletedCharacter } from '../../../contexts/selectedCharacter/hooks/useSelectedCharacterProvider'
import useCardImageFocused from '../../../hooks/useCardImageFocused'
import ComicInfo from './ComicInfo'
import HorizontalCardMedia from './HorizontalCardMedia'
import HorizontalCardName from './HorizontalCardName'
import HorizontalCardPhotoViwer from './HorizontalCardPhotoViwer'
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
    lastVisibleHorizontalCard,
    inView
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
    comicHorizontalCardInfo,
    horizontalCardDescription
  } = useStyles()

  if (loadingSelectedCharacter && !('id' in selectedCharacter)) {
    return null
  }

  return (
    <CardContainer
      className={horizontalCardContainer}
      ref={lastVisibleHorizontalCard && !inView ? ref : null}
    >
      <HorizontalCardMedia
        cardImageFocused={cardImageFocused}
        comicThumbnailExtension={comicThumbnailExtension}
        comicThumbnailPath={comicThumbnailPath}
        selectedCharacter={selectedCharacter}
        toggleCardImageFocused={toggleCardImageFocused}
        comic={comic}
      />

      <CardContent className={
        `${horizontalCardInfo}
         ${comic && comicHorizontalCardInfo}`
      }>
        <HorizontalCardName
          comic={comic}
          comicName={comicName}
          selectedCharacter={selectedCharacter}
        />

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
      <HorizontalCardPhotoViwer
        comic={comic || false}
        cardImageFocused={cardImageFocused}
        toggleCardImageFocused={toggleCardImageFocused}
        query={query}
      />
    </CardContainer>
  )
})

export default HorizontalCard
