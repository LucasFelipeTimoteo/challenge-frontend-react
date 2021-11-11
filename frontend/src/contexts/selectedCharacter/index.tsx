import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ICharacter } from '../../hooks/useCharacters/types';

interface IContextValue {
  selectedCharacter: ICharacter,
  handleSelectedCharacter: (selectedUser: ICharacter) => void
}

interface ISelectedCharacterProps {
  children: ReactNode
}

const selectedCharacterContext = createContext<IContextValue>({} as IContextValue)

export function SelectedCharacterProvider({ children }: ISelectedCharacterProps) {
  const [selectedCharacter, setSelectedCharacter] = useState({} as ICharacter)

  const handleSelectedCharacter = (selectedUser: ICharacter) => {
    setSelectedCharacter(selectedUser)
  }

  const contextValue = { selectedCharacter, handleSelectedCharacter }

  return (
    <selectedCharacterContext.Provider value={contextValue}>
      {children}
    </selectedCharacterContext.Provider>
  )
}

export const useSeletedUser = () => {
  const { selectedCharacter, handleSelectedCharacter } = useContext(selectedCharacterContext)

  return { selectedCharacter, handleSelectedCharacter }
}
