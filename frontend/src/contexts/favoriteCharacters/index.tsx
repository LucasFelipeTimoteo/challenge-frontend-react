import { createContext } from 'react'
import useFavoriteCharacters from './hooks/useFavoriteCharacters'
import { IFavoriteCharactersContextValues, IFavoriteCharactersProviderProps } from './types'
import getStorageFavoriteCharacters from './utils/getStorageFavoriteCharacters'

export const FavoriteCharactersContext = createContext({} as IFavoriteCharactersContextValues)

export function FavoriteCharactersProvider({ children }: IFavoriteCharactersProviderProps) {
  const defaultFavoriteCharacters = getStorageFavoriteCharacters()

  const {
    addFavoriteCharacter,
    removeFavoriteCharacter,
    favoriteCharacters
  } = useFavoriteCharacters(defaultFavoriteCharacters)

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