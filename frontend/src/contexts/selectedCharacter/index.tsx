import md5 from 'md5';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ICharacter } from '../../hooks/useCharacters/types';
import getEnvVariables from '../../hooks/utils/getEnvVariables';
import marvelCharactersApi from '../../services/api/marvelCharactersApi';
import getURLPathId from '../../utils/getURLPathId';
import getStorageSelectedCharacterOrUseDefault from './utils/getStorageSelectedCharacterOrUseDefault';
import singleCharacterTypeGuard from './utils/typeGuards/singleCharacterTypeGuard';

interface IContextValue {
  selectedCharacter: ICharacter,
  handleSelectedCharacter: (selectedUser: ICharacter) => void
  loadingSelectedCharacter: boolean
}

interface ISelectedCharacterProps {
  children: ReactNode
}

const selectedCharacterContext = createContext({} as IContextValue)

export function SelectedCharacterProvider({ children }: ISelectedCharacterProps) {
  const storageSelectedCharacterValue = getStorageSelectedCharacterOrUseDefault()
  const pathId = getURLPathId()
  const storageCharacterIdIsTheSameOfPath = (
    'id' in storageSelectedCharacterValue && storageSelectedCharacterValue.id === pathId
  )
  const selectedCharacterDefaultValue = (
    storageCharacterIdIsTheSameOfPath ? storageSelectedCharacterValue : {} as ICharacter
  )

  const [selectedCharacter, setSelectedCharacter] = useState(selectedCharacterDefaultValue)
  const [loadingSelectedCharacter, setLoadingSelectedCharacter] = useState(false)


  useEffect(() => {
    const getSelectedCharacter = async (pathId: number) => {
      setLoadingSelectedCharacter(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)

      try {
        const api = marvelCharactersApi({
          limit,
          publicKey,
          hash,
          timestamp,
        })
        const apiRequest = await api(`characters/${pathId}`)

        const response = apiRequest.data
        const character = response.data.results[0]

        if(!singleCharacterTypeGuard(character)) {
          throw new Error('API response does not have correct type')
        }

        setSelectedCharacter(character)
        window.localStorage.setItem(
          'MARVEL_STRIKE_TEAM_SELECTED_CHARACTER',
          JSON.stringify(character)
        )
        setLoadingSelectedCharacter(false)
      }
      catch (error) {
        window.location.pathname = '/'
        console.log(error)
      }
    }

    if (typeof pathId === 'number' && !storageCharacterIdIsTheSameOfPath) {
      getSelectedCharacter(pathId)
    }
  }, [pathId, storageCharacterIdIsTheSameOfPath])


  const handleSelectedCharacter = (selectedUser: ICharacter) => {
    setSelectedCharacter(selectedUser)
    window.localStorage.setItem(
      'MARVEL_STRIKE_TEAM_SELECTED_CHARACTER',
      JSON.stringify(selectedUser)
    )
  }

  const contextValue = { selectedCharacter, handleSelectedCharacter, loadingSelectedCharacter }

  return (
    <selectedCharacterContext.Provider value={contextValue}>
      {children}
    </selectedCharacterContext.Provider>
  )
}

export const useSeletedUser = () => {
  const {
    selectedCharacter,
    handleSelectedCharacter,
    loadingSelectedCharacter
  } = useContext(selectedCharacterContext)

  return { selectedCharacter, handleSelectedCharacter, loadingSelectedCharacter }
}
