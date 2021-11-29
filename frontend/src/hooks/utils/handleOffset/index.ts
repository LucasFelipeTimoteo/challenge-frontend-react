import { ICharacterComics } from "../../useCharacterComics/types"
import { ICharacter } from "../../useCharacters/types"

const handleOffset = (list: ICharacter[] | ICharacterComics[]) => {
  const totalListLength = list.length
  const newOffset = String(totalListLength)
  return newOffset
}

export default handleOffset