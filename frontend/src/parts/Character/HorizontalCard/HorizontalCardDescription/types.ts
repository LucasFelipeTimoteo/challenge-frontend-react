import { ICharacter } from "../../../../hooks/useCharacters/types";

export interface IHorizontalCardDescriptionProps {
  comicDescription?: string,
  comic?: boolean,
  selectedCharacter: ICharacter
}