import {
  Card as CardContainer,
  CardContent
} from '@material-ui/core'
import React, { forwardRef, memo } from 'react'
import useCardIsFocused from '../../../hooks/useCardIsFocused'
import CardDescriptionReadMore from './CardDescriptionReadMore'
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
  const { cardIsFocused, toggleCardIsFocused } = useCardIsFocused()

  const {
    cardWrapper,
    textContentWrapper,
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

          <CardDescriptionReadMore cardIsFocused={cardIsFocused} />
        </CardContent>
      </CardContainer>
    </>
  )
})

export default memo(Card)