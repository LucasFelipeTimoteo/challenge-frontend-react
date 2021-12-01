import { ICharacter } from "../../../../hooks/useCharacters/types";

export interface IHorizontalCardMediaProps {
  comicThumbnailPath?: string,
  comicThumbnailExtension?: string,
  selectedCharacter: ICharacter,
  cardImageFocused: boolean,
  toggleCardImageFocused: () => void,
  comic?: boolean
}