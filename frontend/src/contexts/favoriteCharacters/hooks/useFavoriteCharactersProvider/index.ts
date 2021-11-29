import { useContext } from "react"
import { FavoriteCharactersContext } from "../.."

export function useFavoriteCharactersProvider() {
  const {
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter
  } = useContext(FavoriteCharactersContext)

  return {
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter
  }
}