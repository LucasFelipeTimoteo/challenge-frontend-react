import { IconButton } from '@material-ui/core'
import { DeleteForever, People } from '@material-ui/icons'
import React, { useCallback } from 'react'
import { useFavoriteCharactersProvider } from '../../../../contexts/favoriteCharacters/hooks/useFavoriteCharactersProvider'
import useStyles from './styles'
import { IFavoriteCharacterActionButtonProps } from './types'

export default function FavoriteCharacterActionButton({
  character,
  characterId
}: IFavoriteCharacterActionButtonProps) {
  const {
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter
  } = useFavoriteCharactersProvider()
  const { addFavoritesButton, disfavorButton } = useStyles()

  const handleRemoveFavoriteCharacter = () => {
    removeFavoriteCharacter(character)
  }

  const handleAddFavoriteCharacter = () => {
    addFavoriteCharacter(character)
  }

  const characterIsFavorited = useCallback(() => (
    favoriteCharacters.some(favoritedCharacter => (
      favoritedCharacter.id === characterId
    ))
  ), [favoriteCharacters, characterId])

  return (
    <IconButton
      title={
        characterIsFavorited() ? "Disfavor character" : "Add character to favorites"
      }
      onClick={
        characterIsFavorited() ?
          handleRemoveFavoriteCharacter :
          handleAddFavoriteCharacter
      }
      className={characterIsFavorited() ? disfavorButton : addFavoritesButton}
      data-testid="favoriteCharacterActionButton"
    >

      {
        characterIsFavorited() ?
          <DeleteForever data-testid="deleteOfFavorites" /> :
          <People data-testid="addToFavorites" />
      }

    </IconButton>
  )
}