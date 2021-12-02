const isLoading = (
  loadingCharacterComics: boolean,
  loadingSelectedCharacter: boolean,
  resultsFound: boolean
) => {
  const loadingCondition = (
    (loadingCharacterComics || loadingSelectedCharacter) && resultsFound
  )

  return loadingCondition
}

export default isLoading