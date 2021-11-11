import { ICharacter } from "../../types/ICharacters/types";

export type CharacterListProps = {
  teamPage?: boolean,
  currentCharactersList: ICharacter[],
  searchResultsNotFound?: boolean,
  loadingSearchCharacters?: boolean,
}