import { IconButton } from '@material-ui/core'
import { DeleteForever, People } from '@material-ui/icons'
import React from 'react'
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

  //optimizar usando useCallback
  const characterIsFavorited = favoriteCharacters.some(favoritedCharacter => (
    favoritedCharacter.id === characterId
  ))

  return (
    <IconButton
      title={
        characterIsFavorited ? "Disfavor character" : "Add character to favorites"
      }
      onClick={characterIsFavorited ? handleRemoveFavoriteCharacter : handleAddFavoriteCharacter}
      className={characterIsFavorited ? disfavorButton : addFavoritesButton}
    >
      {characterIsFavorited ? <DeleteForever /> : <People />}
    </IconButton>
  )
}
