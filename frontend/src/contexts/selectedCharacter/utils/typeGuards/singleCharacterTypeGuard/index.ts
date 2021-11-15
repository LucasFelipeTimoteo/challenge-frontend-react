import { ICharacter } from "../../../../../hooks/useCharacters/types"

const singleCharacterTypeGuard = (parsedStorageCharacter: Object): parsedStorageCharacter is ICharacter => {
  if (!(typeof parsedStorageCharacter === 'object' && parsedStorageCharacter !== null)) {
    return false
  }

  if (!("id" in parsedStorageCharacter && "name" in parsedStorageCharacter)) {
    return false
  }

  return true
}

export default singleCharacterTypeGuard