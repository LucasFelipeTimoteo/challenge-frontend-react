import { createContext, ReactNode, useContext, useState } from 'react'
import { ICharacter } from '../../types/ICharacters/types'
import getStorageFavoriteCharactersOrUseDefault from './utils/getStorageCharactersOrUseDefault'

interface IFavoriteCharactersContextValues {
  favoriteCharacters: ICharacter[],
  addFavoriteCharacter: (character: ICharacter) => void,
  removeFavoriteCharacter: (character: ICharacter) => void,
}

interface IFavoriteCharactersProviderProps {
  children: ReactNode
}

const FavoriteCharactersContext = createContext({} as IFavoriteCharactersContextValues)

export function FavoriteCharactersProvider({ children }: IFavoriteCharactersProviderProps) {
  const defaultFavoriteCharacters = getStorageFavoriteCharactersOrUseDefault()

  const [favoriteCharacters, setFavoriteCharacters] = useState<ICharacter[]>(defaultFavoriteCharacters)

  const addFavoriteCharacter = (character: ICharacter) => {
    const notADuplicatedCharacter = favoriteCharacters.every(favoriteCharacter => (
      character.id !== favoriteCharacter.id
    ))

    if (notADuplicatedCharacter) {
      setFavoriteCharacters([...favoriteCharacters, character])
      window.localStorage.setItem(
        'MARVEL_STRIKE_TEAM_FETCHED_CHARACTERS_FAVORITES',
        JSON.stringify([...favoriteCharacters, character])
      )
    }
  }

  const removeFavoriteCharacter = (character: ICharacter) => {
    const newFavoriteCharactersList = favoriteCharacters.filter(favoriteCharacter => (
      favoriteCharacter.id !== character.id
    ))

    setFavoriteCharacters(newFavoriteCharactersList)
    window.localStorage.setItem(
      'MARVEL_STRIKE_TEAM_FETCHED_CHARACTERS_FAVORITES',
      JSON.stringify(newFavoriteCharactersList)
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

export function useFavoriteCharacterProvider() {
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