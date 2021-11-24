import { storagePathOptions } from "../../types"

const getCurrentStorage = (storagePath: storagePathOptions, optionalItemIdParam: number | null) => {
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

  if(storagePath === 'comics' && optionalItemIdParam) {
    const currentPathFragment = `FETCHED_${optionalItemIdParam}_COMICS`
    favoriteCharactersStoragePath = defaultPathFragment + currentPathFragment
  }

  if(storagePath === 'comicsResultsNumber' && optionalItemIdParam) {
    const currentPathFragment = `FETCHED_${optionalItemIdParam}_COMICS_RESULTS_NUMBER`
    favoriteCharactersStoragePath = defaultPathFragment + currentPathFragment
  }
  
  return favoriteCharactersStoragePath
}

export default getCurrentStorage