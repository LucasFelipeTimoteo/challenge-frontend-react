import { storagePathOptions } from "../../types"

const getCurrentStorage = (storagePath: storagePathOptions) => {
  const defaultPathFragment = 'MARVEL_STRIKE_TEAM_'
  let favoriteCharactersStoragePath = ''

  if (storagePath === 'favoriteCharacters') {
    const currentPathFragment = "FETCHED_CHARACTERS_FAVORITES"
    favoriteCharactersStoragePath = defaultPathFragment + currentPathFragment
  }

  if (storagePath === 'characters') {
    const currentPathFragment = "FETCHED_CHARACTERS"
    favoriteCharactersStoragePath = defaultPathFragment + currentPathFragment
  }

  if (storagePath === 'charactersCount') {
    const currentPathFragment = "FETCHED_CHARACTERS_RESULTS_COUNT"
    favoriteCharactersStoragePath = defaultPathFragment + currentPathFragment
  }

  if (storagePath === 'selectedCharacter') {
    const currentPathFragment = "SELECTED_CHARACTER"
    favoriteCharactersStoragePath = defaultPathFragment + currentPathFragment
  }

  return favoriteCharactersStoragePath
}

export default getCurrentStorage