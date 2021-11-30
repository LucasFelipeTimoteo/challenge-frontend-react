import { ICharacter } from "../../hooks/useCharacters/types";

export type CharacterListProps = {
  teamPage?: boolean,
  currentCharactersList: ICharacter[],
  searchResultsNotFound?: boolean,
  loadingSearchCharacters?: boolean,
  inView?: boolean
}