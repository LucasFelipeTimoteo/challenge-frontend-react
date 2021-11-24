import { ICharacterComics } from "../../types"
import characterComicsTypeGuard from "../typeGuards/characterComicsTypeGuard"

let defaultCharacterValue: ICharacterComics[] = []

const getStorageCharacterComics = (characterId: number) => {
  const storageCharacterComics = window.localStorage.getItem(
    `MARVEL_STRIKE_TEAM_FETCHED_${characterId}_COMICS`
  )

  if (!storageCharacterComics) {
    return defaultCharacterValue
  }
  const parsedStorageCharacterComics = JSON.parse(storageCharacterComics)

  if (!Array.isArray(parsedStorageCharacterComics)) {
    return defaultCharacterValue
  }

  if (characterComicsTypeGuard(parsedStorageCharacterComics)) {
    return parsedStorageCharacterComics
  }
  else {
    return defaultCharacterValue
  }
}

export default getStorageCharacterComics