import {
  Card as CardContainer,
  CardContent, Typography
} from '@material-ui/core'
import React, { forwardRef, memo, useState } from 'react'
import CardMediaThumbnail from './CardMediaThumbnail'
import CharacterDescription from './CharacterDescription'
import CharacterName from './CharacterName'
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
  const [cardIsFocused, setCardIsFocused] = useState(false)

  const toggleCardIsFocused = () => {
    setCardIsFocused(prev => !prev)
  }

  const {
    cardWrapper,
    textContentWrapper,
    readMoreGradientWrapper,
    readMoreText
  } = useStyles()

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

        <CardContent className={textContentWrapper} onClick={toggleCardIsFocused}>
          <CharacterName characterName={characterName} />
          <CharacterDescription
            cardIsFocused={cardIsFocused}
            characterDescription={characterDescription}
          />

          <div className={readMoreGradientWrapper}>
            <Typography
              variant="caption"
              component="p"
              className={readMoreText}
            >
              {
                cardIsFocused
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