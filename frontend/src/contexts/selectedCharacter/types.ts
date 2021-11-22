import { ReactNode } from "react";
import { ICharacter } from "../../hooks/useCharacters/types";

export interface IContextValue {
  selectedCharacter: ICharacter,
  handleSelectedCharacter: (selectedUser: ICharacter) => void
  loadingSelectedCharacter: boolean
}

export interface ISelectedCharacterProps {
  children: ReactNode
}