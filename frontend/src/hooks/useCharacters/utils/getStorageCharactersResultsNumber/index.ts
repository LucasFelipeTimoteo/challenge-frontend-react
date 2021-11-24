const defaultTotalResultsValue = 0

const getStorageCharactersResultsNumber = () => {
  const storageResultsValue = window.localStorage.getItem('MARVEL_STRIKE_TEAM_FETCHED_CHARACTERS_RESULTS_COUNT')
  if (typeof Number(storageResultsValue) === 'number') {
    const parsedStorageResultsValue = Number(storageResultsValue)
    return parsedStorageResultsValue
  }

  return defaultTotalResultsValue
}

export default getStorageCharactersResultsNumber
