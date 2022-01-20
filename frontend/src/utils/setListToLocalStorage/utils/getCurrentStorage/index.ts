import { storagePathOptions } from "../../types"

const getCurrentStorage = (storagePath: storagePathOptions, optionalItemIdParam: number | null) => {
  const defaultPathFragment = 'MARVEL_STRIKE_TEAM_'
  let currentPathFrangment = ''

  if (storagePath === 'favoriteCharacters') {
    const currentPathFragment = "FETCHED_CHARACTERS_FAVORITES"
    currentPathFrangment = defaultPathFragment + currentPathFragment
  }

  if (storagePath === 'characters') {
    const currentPathFragment = "FETCHED_CHARACTERS"
    currentPathFrangment = defaultPathFragment + currentPathFragment
  }

  if (storagePath === 'charactersCount') {
    const currentPathFragment = "FETCHED_CHARACTERS_RESULTS_COUNT"
    currentPathFrangment = defaultPathFragment + currentPathFragment
  }

  if (storagePath === 'selectedCharacter') {
    const currentPathFragment = "SELECTED_CHARACTER"
    currentPathFrangment = defaultPathFragment + currentPathFragment
  }

  if(storagePath === 'comics' && optionalItemIdParam) {
    const currentPathFragment = `FETCHED_${optionalItemIdParam}_COMICS`
    currentPathFrangment = defaultPathFragment + currentPathFragment
  }

  if(storagePath === 'comicsResultsNumber' && optionalItemIdParam) {
    const currentPathFragment = `FETCHED_${optionalItemIdParam}_COMICS_RESULTS_NUMBER`
    currentPathFrangment = defaultPathFragment + currentPathFragment
  }
  
  return currentPathFrangment
}

export default getCurrentStorage