import { ICharacter } from "../../../../hooks/useCharacters/types";

export interface ICardMediaThumbnailProps {
  character: ICharacter,
  characterId: number,
  characterName: string,
  characterThumbnail: string,
  characterThumbnailExtension: string
}