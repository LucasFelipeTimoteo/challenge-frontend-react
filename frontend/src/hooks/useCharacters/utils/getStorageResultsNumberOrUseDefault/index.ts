const defaultTotalResultsValue = 0
const getStorageResultsNumberOrUseDefault = () => {
  const storageResultsValue = window.localStorage.getItem('MARVEL_STRIKE_TEAM_FETCHED_RESULTS_NUMBER')
  if (typeof Number(storageResultsValue) === 'number') {
    const parsedStorageResultsValue = Number(storageResultsValue)
    return parsedStorageResultsValue
  }

  return defaultTotalResultsValue
}

export default getStorageResultsNumberOrUseDefault
