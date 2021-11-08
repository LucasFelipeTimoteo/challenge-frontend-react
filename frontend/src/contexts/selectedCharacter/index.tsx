import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IContextValue {
  selectedCharacterId: number,
  handleSelectedCharacterId: (userId: number) => void
}

interface ISelectedCharacterProps {
  children: ReactNode
}

const selectedCharacterContext = createContext<IContextValue>({} as IContextValue)

export function SelectedCharacterProvider({ children }: ISelectedCharacterProps) {
  const [selectedCharacterId, setSelectedCharacterId] = useState<number>(NaN)

  const handleSelectedCharacterId = (userId: number) => {
    setSelectedCharacterId(userId)
  }

  const contextValue = { selectedCharacterId, handleSelectedCharacterId }

  return (
    <selectedCharacterContext.Provider value={contextValue}>
      {children}
    </selectedCharacterContext.Provider>
  )
}

export const useSeletedUser = () => {
  const { selectedCharacterId, handleSelectedCharacterId } = useContext(selectedCharacterContext)

  return { selectedCharacterId, handleSelectedCharacterId }
}
