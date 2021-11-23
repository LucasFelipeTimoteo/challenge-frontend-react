import md5 from "md5"
import { useEffect, useState } from "react"
import marvelCharactersApi from "../../services/api/marvelCharactersApi"
import getEnvVariables from "../utils/getEnvVariables"
import charactersListTypeGuard from "./utils/typeGuards/charactersListTypeGuard"
import getStorageCharactersOrUseDefault from './utils/getStorageCharactersOrUseDefault'
import getStorageCharactersResultsCountOrUseDefault from "./utils/getStorageCharactersResultsCountOrUseDefault"
import setLocalStorageData from "../../utils/setListToLocalStorage"

export default function useCharacters(
  inView: boolean,
  loadMoreData: boolean,
  searchKey: string
) {
  const defaultCharactersValue = getStorageCharactersOrUseDefault()
  const defaultCharactersCountValue = getStorageCharactersResultsCountOrUseDefault()

  const [characters, setCharacters] = useState(defaultCharactersValue)
  const [charactersCount, setcharactersCount] = useState(defaultCharactersCountValue)
  const [loadingCharacters, setLoadingCharacters] = useState(false)

  const firstRenderFetchCondition = (characters.length === 0 && !loadingCharacters)
  const normalFetchCondition = (inView && !loadingCharacters && loadMoreData && !searchKey)

  useEffect(() => {
    const getCharacters = async () => {
      setLoadingCharacters(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)

      const handleOffset = () => {
        const totalPageCharacters = characters.length
        const newOffset = String(totalPageCharacters)
        return newOffset
      }

      try {
        const api = marvelCharactersApi({
          limit,
          publicKey,
          handleOffset,
          hash,
          timestamp
        })
        const apiRequest = await api('characters')

        const response = apiRequest.data
        const resultsNumber = response.data.total
        const characterList = response.data.results
        
        if (!charactersListTypeGuard(characterList)) {
          throw new Error('API response does not have correct type')
        }
        const newCharacterList = [...characters, ...characterList]
        
        setCharacters(prev => [...prev, ...characterList])
        setcharactersCount(resultsNumber)
        setLocalStorageData('characters', {list: newCharacterList})
        setLocalStorageData('charactersCount', {item: resultsNumber})

        setLoadingCharacters(false)
      }
      catch (error) {
        console.log(error)
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
    loadingCharacters
  }
}