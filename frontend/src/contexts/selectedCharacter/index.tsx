import React, { createContext } from 'react';
import { ICharacter } from '../../hooks/useCharacters/types';
import getURLPathId from '../../utils/getURLPathId';
import useSelectedCharacter from './hooks/useSelectedCharacter';
import { IContextValue, ISelectedCharacterProps } from './types';
import getStorageSelectedCharacter from './utils/getStorageSelectedCharacter';

export const SelectedCharacterContext = createContext({} as IContextValue)

export function SelectedCharacterProvider({ children }: ISelectedCharacterProps) {
  const storageSelectedCharacterValue = getStorageSelectedCharacter()
  const pathId = getURLPathId()
  const storageCharacterIdIsTheSameOfPath = (
    'id' in storageSelectedCharacterValue && storageSelectedCharacterValue.id === pathId
  )
  const selectedCharacterDefaultValue = (
    storageCharacterIdIsTheSameOfPath ? storageSelectedCharacterValue : {} as ICharacter
  )

  const {
    loadingSelectedCharacter,
    selectedCharacter,
    handleSelectedCharacter
  } = useSelectedCharacter(
    pathId,
    selectedCharacterDefaultValue,
    storageCharacterIdIsTheSameOfPath
  )

  const contextValue = {
    selectedCharacter,
    handleSelectedCharacter,
    loadingSelectedCharacter
  }

  return (
    <SelectedCharacterContext.Provider value={contextValue}>
      {children}
    </SelectedCharacterContext.Provider>
  )
}