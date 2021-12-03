import md5 from "md5"
import { useEffect, useState } from "react"
import marvelCharactersApi from "../../services/api/marvelCharactersApi"
import getEnvVariables from "../utils/getEnvVariables"
import charactersListTypeGuard from "./utils/typeGuards/charactersListTypeGuard"
import getStorageCharacters from './utils/getStorageCharacters'
import getStorageCharactersResultsNumber from "./utils/getStorageCharactersResultsNumber"
import setLocalStorageData from "../../utils/setListToLocalStorage"
import handleOffset from "../utils/handleOffset"
import validateAPIResponse from "../utils/errors/validateAPIResponse"

export default function useCharacters(
  inView: boolean,
  loadMoreData: boolean,
  searchKey: string
) {
  const defaultCharactersValue = getStorageCharacters()
  const defaultCharactersResultsNumberValue = getStorageCharactersResultsNumber()

  const [characters, setCharacters] = useState(defaultCharactersValue)
  const [charactersCount, setcharactersCount] = useState(defaultCharactersResultsNumberValue)
  const [loadingCharacters, setLoadingCharacters] = useState(false)
  const [resultsFound, setResultsFound] = useState(true)

  const firstRenderFetchCondition = (
    (characters.length === 0 && !loadingCharacters) &&
    resultsFound
  )
  const normalFetchCondition = (
    (inView && !loadingCharacters && loadMoreData && !searchKey) &&
    resultsFound
  )

  useEffect(() => {
    const getCharacters = async () => {
      setLoadingCharacters(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)
      const offset = handleOffset(characters)

      try {
        const api = marvelCharactersApi({
          limit,
          publicKey,
          offset,
          hash,
          timestamp
        })
        const apiRequest = await api('characters')

        const response = apiRequest.data
        validateAPIResponse(response)

        const resultsNumber = response.data.total
        const characterList = response.data.results

        if (!charactersListTypeGuard(characterList)) {
          throw new Error('API response does not have correct type')
        }
        setResultsFound(true)

        const newCharacterList = [...characters, ...characterList]

        setCharacters(prev => [...prev, ...characterList])
        setcharactersCount(resultsNumber)
        setLocalStorageData('characters', { list: newCharacterList })
        setLocalStorageData('charactersCount', { item: resultsNumber })

        setLoadingCharacters(false)
      }
      catch (error) {
        console.log(error)
        setLoadingCharacters(false)
        setResultsFound(false)
      }
    }

    if (normalFetchCondition || firstRenderFetchCondition) {
      getCharacters()
    }

  }, [
    characters,
    loadingCharacters,
    inView,
    loadMoreData,
    searchKey,
    normalFetchCondition,
    firstRenderFetchCondition
  ])

  return {
    characters,
    charactersCount,
    loadingCharacters,
    resultsFound
  }
}