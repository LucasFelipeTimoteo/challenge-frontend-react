import { ICharacter } from "../../../../hooks/useCharacters/types";

export interface IHorizontalCardNameProps {
  comic?: boolean,
  comicName?: string,
  selectedCharacter: ICharacter
}