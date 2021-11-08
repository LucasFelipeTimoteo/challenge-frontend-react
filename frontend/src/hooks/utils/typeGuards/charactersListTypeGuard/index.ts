import { ICharacter } from "../../../../types/ICharacters/types"

const charactersListTypeGuard = (storageList: any[]): storageList is ICharacter[] => {
  if (!(typeof storageList[0] === 'object' && storageList[0] !== null)) {
    return false
  }
  else if ('id' in storageList[0] && 'name' in storageList[0]) {
    return true
  }

  return false
}

export default charactersListTypeGuard