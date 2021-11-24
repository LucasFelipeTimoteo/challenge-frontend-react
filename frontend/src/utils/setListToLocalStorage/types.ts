import { ICharacterComics } from "../../hooks/useCharacterComics/types"
import { ICharacter } from "../../hooks/useCharacters/types"

export type storagePathOptions = (
  "favoriteCharacters" |
  "characters" |
  "selectedCharacter" |
  "comics" |
  'comicsResultsNumber' |
  "charactersCount"
)

type IStorageItem = ICharacter | ICharacterComics

export interface ISetLocalStorageData {
  item?: IStorageItem,
  list?: IStorageItem[],
  itemId?: number
}