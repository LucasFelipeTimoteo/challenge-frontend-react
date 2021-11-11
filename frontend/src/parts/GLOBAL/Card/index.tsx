import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'
import { DeleteForever, People } from '@material-ui/icons'
import React, { forwardRef, memo, useState } from 'react'
import { useHistory } from 'react-router'
import { useFavoriteCharacterProvider } from '../../../contexts/favoritedCharacters'
import { useSeletedUser } from '../../../contexts/selectedCharacter'
import { altCharacterDescription, altCharacterName } from './altTexts'
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
  },
  ref
) => {
  const history = useHistory()
  const [cardFocused, setCardFocused] = useState(false)
  const { handleSelectedCharacter } = useSeletedUser()
  const {
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter
  } = useFavoriteCharacterProvider()

  const toggleCardFocused = () => {
    setCardFocused(prev => !prev)
  }

  const goToCharacterInfoPage = () => {
    history.push(`character/${characterId}/comics`)
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
    cardMedia,
    cardMediaOverlay,
    cardTitle,
    cardWrapper,
    textContentWrapper,
    cardDescriptionFullSizeMode,
    readMoreGradientWrapper,
    readMoreText
  } = useStyles()

  const imagePath = `${characterThumbnail}.${characterThumbnailExtension}`
  const parsedCharacterDescription = characterDescription.trim()

  // optimizar usando o useCallback
  const characterIsFavorited = favoriteCharacters.some(favoritedCharacter => (
    favoritedCharacter.id === characterId
  ))

  return (
    <>
      <CardContainer className={cardWrapper} ref={lastVisibleCharacter ? ref : null}>
        <CardMedia
          className={cardMedia}
          image={imagePath}
          onClick={() => {
            handleSelectedCharacter(character)
            goToCharacterInfoPage()
          }}
        >
          <Typography
            variant="subtitle2"
            component="p"
            className={cardMediaOverlay}
            title={`click here to explore ${characterName} related content`}
          >
            Expore character related content
          </Typography>
        </CardMedia>

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