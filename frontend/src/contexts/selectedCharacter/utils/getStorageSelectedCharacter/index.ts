import { ICharacter } from "../../../../hooks/useCharacters/types"
import singleCharacterTypeGuard from "../typeGuards/singleCharacterTypeGuard"

let defaultCharacterValue = {} as ICharacter

const getStorageSelectedCharacter = () => {
  const storageCharacters = window.localStorage.getItem('MARVEL_STRIKE_TEAM_SELECTED_CHARACTER')
  if (!storageCharacters) {
    return defaultCharacterValue
  }

  const parsedStorageCharacter = JSON.parse(storageCharacters)
  
  if(singleCharacterTypeGuard(parsedStorageCharacter)){
    return parsedStorageCharacter
  } else {
    return defaultCharacterValue
  }
}

export default getStorageSelectedCharacter