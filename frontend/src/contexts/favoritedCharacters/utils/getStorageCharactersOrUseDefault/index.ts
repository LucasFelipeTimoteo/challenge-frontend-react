import charactersListTypeGuard from "../../../../hooks/utils/typeGuards/charactersListTypeGuard"
import { ICharacter } from "../../../../hooks/useCharacters/types"

let defaultCharacterValue: ICharacter[] = []

const getStorageFavoriteCharactersOrUseDefault = () => {
  const storageFavoriteCharacters = window.localStorage.getItem('MARVEL_STRIKE_TEAM_FETCHED_CHARACTERS_FAVORITES')
  if (!storageFavoriteCharacters) {
    return defaultCharacterValue
  }
  const parsedStorageFavoriteCharacters = JSON.parse(storageFavoriteCharacters)

  if (!Array.isArray(parsedStorageFavoriteCharacters)) {
    return defaultCharacterValue
  }

  if (charactersListTypeGuard(parsedStorageFavoriteCharacters)) {
    return parsedStorageFavoriteCharacters
  }
  else {
    return defaultCharacterValue
  }
}

export default getStorageFavoriteCharactersOrUseDefault