import { useState } from "react"
import { ICharacter } from "../../../../hooks/useCharacters/types"
import setLocalStorageData from "../../../../utils/setListToLocalStorage"

export default function useFavoriteCharacters(defaultFavoriteCharacters: ICharacter[]) {
  const [favoriteCharacters, setFavoriteCharacters] = useState<ICharacter[]>(
    defaultFavoriteCharacters
  )

  const addFavoriteCharacter = (character: ICharacter) => {
    const notADuplicatedCharacter = favoriteCharacters.every(favoriteCharacter => (
      character.id !== favoriteCharacter.id
    ))

    if (notADuplicatedCharacter) {
      setFavoriteCharacters([...favoriteCharacters, character])
      setLocalStorageData(
        'favoriteCharacters',
        { list: favoriteCharacters, item: character }
      )
    }
  }

  const removeFavoriteCharacter = (character: ICharacter) => {
    const newFavoriteCharactersList = favoriteCharacters.filter(favoriteCharacter => (
      favoriteCharacter.id !== character.id
    ))

    setFavoriteCharacters(newFavoriteCharactersList)
    setLocalStorageData(
      'favoriteCharacters',
      { list: newFavoriteCharactersList }
    )
  }

  return {
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter
  }
}
