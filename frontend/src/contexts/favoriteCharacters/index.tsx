import { createContext, useState } from 'react'
import { ICharacter } from '../../hooks/useCharacters/types'
import setLocalStorageData from '../../utils/setListToLocalStorage'
import { IFavoriteCharactersContextValues, IFavoriteCharactersProviderProps } from './types'
import getStorageFavoriteCharacters from './utils/getStorageFavoriteCharacters'

export const FavoriteCharactersContext = createContext({} as IFavoriteCharactersContextValues)

export function FavoriteCharactersProvider({ children }: IFavoriteCharactersProviderProps) {
  const defaultFavoriteCharacters = getStorageFavoriteCharacters()

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

  const providerValues = {
    favoriteCharacters,
    removeFavoriteCharacter,
    addFavoriteCharacter
  }

  return (
    <FavoriteCharactersContext.Provider value={providerValues}>
      {children}
    </FavoriteCharactersContext.Provider>
  )
}