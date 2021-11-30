import {
  Card as CardContainer,
  CardContent, Typography
} from '@material-ui/core'
import React, { forwardRef, memo, useState } from 'react'
import { altCharacterDescription, altCharacterName } from './altTexts'
import CardMediaThumbnail from './CardMediaThumbnail'
import FavoriteCharacterActionButton from './FavoriteCharacterActionButton'
import useStyles from './styles'
import { ICardProps } from './types'

const Card = forwardRef<Element, ICardProps>((
  {
    character,
    characterThumbnail,
    characterThumbnailExtension,
    characterId,
    characterName,
    characterDescription,
    lastVisibleCharacter,
    inView
  },
  ref
) => {
  const [cardFocused, setCardFocused] = useState(false)

  const toggleCardFocused = () => {
    setCardFocused(prev => !prev)
  }

  const {
    cardTitle,
    cardWrapper,
    textContentWrapper,
    cardDescriptionFullSizeMode,
    readMoreGradientWrapper,
    readMoreText
  } = useStyles()

  const parsedCharacterDescription = characterDescription.trim()

  return (
    <>
      <CardContainer
        className={cardWrapper}
        ref={lastVisibleCharacter && !inView ? ref : null}
      >

        <CardMediaThumbnail
          character={character}
          characterId={characterId}
          characterName={characterName}
          characterThumbnail={characterThumbnail}
          characterThumbnailExtension={characterThumbnailExtension}
        />

        <FavoriteCharacterActionButton
          character={character}
          characterId={characterId}
        />
        
        <CardContent className={textContentWrapper} onClick={toggleCardFocused}>

          <Typography
            variant="h2"
            component="p"
            title={`The character name is ${characterName}`}
            className={cardTitle}
          >
            {characterName || altCharacterName}
          </Typography>

          <Typography
            variant="body1"
            title={parsedCharacterDescription || altCharacterDescription}
            className={`${cardFocused && cardDescriptionFullSizeMode}`}
          >
            {parsedCharacterDescription || altCharacterDescription}
          </Typography>

          <div className={readMoreGradientWrapper}>
            <Typography
              variant="caption"
              component="p"
              className={readMoreText}
            >
              {
                cardFocused
                  ?
                  'click to close full read'
                  :
                  'Click to full read'
              }
            </Typography>
          </div>
        </CardContent>
      </CardContainer>
    </>
  )
})

export default memo(Card)