import { Card as CardContainer } from '@material-ui/core'
import React, { forwardRef, memo } from 'react'
import CardMediaThumbnail from './CardMediaThumbnail'
import CardTextContent from './CardTextContent'
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

  const { cardWrapper } = useStyles()

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
        <CardTextContent
          characterName={characterName}
          characterDescription={characterDescription}
        />

      </CardContainer>
    </>
  )
})

export default memo(Card)