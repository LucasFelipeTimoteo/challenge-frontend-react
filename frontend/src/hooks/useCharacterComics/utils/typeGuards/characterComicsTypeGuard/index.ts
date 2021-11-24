import { ICharacterComics } from "../../../types";

const characterComicsTypeGuard = (characterComicsList: any): characterComicsList is ICharacterComics[] => {
  if (!Array.isArray(characterComicsList)) {
    return false
  }

  if (!(typeof characterComicsList[0] === 'object' && characterComicsList[0] !== null)) {
    return false
  }

  if (
    !(
      "id" in characterComicsList[0] &&
      "title" in characterComicsList[0] &&
      "dates" in characterComicsList[0]
    )
  ) {
    return false
  }

  return true
}

export default characterComicsTypeGuard