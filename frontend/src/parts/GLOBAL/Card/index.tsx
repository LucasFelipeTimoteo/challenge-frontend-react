import {
  Card as CardContainer,
  CardContent, IconButton,
  Typography
} from '@material-ui/core'
import { DeleteForever, People } from '@material-ui/icons'
import React, { forwardRef, memo, useState } from 'react'
import { useFavoriteCharactersProvider } from '../../../contexts/favoriteCharacters/hooks/useFavoriteCharactersProvider'
import { altCharacterDescription, altCharacterName } from './altTexts'
import CardMediaThumbnail from './CardMediaThumbnail'
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
  const {
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter
  } = useFavoriteCharactersProvider()

  const toggleCardFocused = () => {
    setCardFocused(prev => !prev)
  }

  const handleRemoveFavoriteCharacter = () => {
    removeFavoriteCharacter(character)
  }

  const handleAddFavoriteCharacter = () => {
    addFavoriteCharacter(character)
  }

  const {
    addFavoritesButton,
    disfavorButton,
    cardTitle,
    cardWrapper,
    textContentWrapper,
    cardDescriptionFullSizeMode,
    readMoreGradientWrapper,
    readMoreText
  } = useStyles()

  const parsedCharacterDescription = characterDescription.trim()

  // optimizar usando o useCallback
  const characterIsFavorited = favoriteCharacters.some(favoritedCharacter => (
    favoritedCharacter.id === characterId
  ))

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
        <IconButton
          title={
            characterIsFavorited ? "Disfavor character" : "Add character to favorites"
          }
          onClick={characterIsFavorited ? handleRemoveFavoriteCharacter : handleAddFavoriteCharacter}
          className={characterIsFavorited ? disfavorButton : addFavoritesButton}
        >
          {characterIsFavorited ? <DeleteForever /> : <People />}
        </IconButton>

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