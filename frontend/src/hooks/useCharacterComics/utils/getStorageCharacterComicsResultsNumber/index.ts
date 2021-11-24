const defaultTotalResultsValue = 0

const getStorageCharacterComicsResultsNumber = (characterId: number) => {
  const storageCharacterComicsResultsResultsValue = window.localStorage.getItem(
    `MARVEL_STRIKE_TEAM_FETCHED_${characterId}_COMICS_RESULTS_NUMBER`
  )

  if (typeof Number(storageCharacterComicsResultsResultsValue) === 'number') {
    const parsedStorageCharacterComicsResultsResultsValue = Number(
      storageCharacterComicsResultsResultsValue
    )

    return parsedStorageCharacterComicsResultsResultsValue
  }

  return defaultTotalResultsValue
}

export default getStorageCharacterComicsResultsNumber