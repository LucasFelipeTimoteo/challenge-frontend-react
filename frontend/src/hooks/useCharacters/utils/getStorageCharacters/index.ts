import charactersListTypeGuard from "../typeGuards/charactersListTypeGuard"
import { ICharacter } from "../../types"

let defaultCharacterValue: ICharacter[] = []

const getStorageCharacters = () => {
  const storageCharacters = window.localStorage.getItem('MARVEL_STRIKE_TEAM_FETCHED_CHARACTERS')
  if (!storageCharacters) {
    return defaultCharacterValue
  }
  const parsedStorageCharacters = JSON.parse(storageCharacters)

  if (!Array.isArray(parsedStorageCharacters)) {
    return defaultCharacterValue
  }

  if (charactersListTypeGuard(parsedStorageCharacters)) {
    return parsedStorageCharacters
  }
  else {
    return defaultCharacterValue
  }
}

export default getStorageCharacters