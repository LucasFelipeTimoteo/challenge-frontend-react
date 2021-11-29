import { ReactNode } from "react";
import { ICharacter } from "../../hooks/useCharacters/types";

export interface IFavoriteCharactersContextValues {
  favoriteCharacters: ICharacter[],
  addFavoriteCharacter: (character: ICharacter) => void,
  removeFavoriteCharacter: (character: ICharacter) => void,
}

export interface IFavoriteCharactersProviderProps {
  children: ReactNode
}