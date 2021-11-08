import md5 from "md5"
import { useEffect, useState } from "react"
import marvelApiInstance from "../../services/api"
import getStorageCharactersOrUseDefault from './utils/getStorageCharactersOrUseDefault'
import getEnvVariables from "../utils/getEnvVariables"
import getStorageResultsNumberOrUseDefault from "./utils/getStorageResultsNumberOrUseDefault"

export default function useCharacters(inView: boolean, loadMoreData: boolean, searchKey: string) {
  const defaultCharactersValue = getStorageCharactersOrUseDefault()
  const defaultTotalResultsValue = getStorageResultsNumberOrUseDefault()

  const [characters, setCharacters] = useState(defaultCharactersValue)
  const [totalResults, setTotalResults] = useState(defaultTotalResultsValue)
  const [loadingCharacters, setLoadingCharacters] = useState(false)

  const firstRenderFetchCondition = (characters.length === 0 && !loadingCharacters)
  const normalFetCondition = (inView && !loadingCharacters && loadMoreData && !searchKey)

  useEffect(() => {
    const getCharacters = async () => {
      setLoadingCharacters(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()

      const handleOffset = () => {
        const totalPageCharacters = characters.length
        const newOffset = String(totalPageCharacters)
        return newOffset
      }

      const hash = () => {
        const hashMd5 = md5(timestamp + privateKey + publicKey)
        return hashMd5
      }
      try {
        const api = marvelApiInstance({
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

        setCharacters(prev => [...prev, ...characterList])
        setTotalResults(resultsNumber)
        handleOffset()
        window.localStorage.setItem(
          'MARVEL_STRIKE_TEAM_FETCHED_CHARACTERS',
          JSON.stringify([...characters, ...characterList])
        )

        window.localStorage.setItem(
          'MARVEL_STRIKE_TEAM_FETCHED_RESULTS_NUMBER',
          resultsNumber
        )

        setLoadingCharacters(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    if (normalFetCondition || firstRenderFetchCondition) {
      getCharacters()
    }

  }, [
    characters,
    loadingCharacters,
    inView,
    loadMoreData,
    searchKey,
    normalFetCondition,
    firstRenderFetchCondition
  ])

  return {
    characters,
    totalResults,
    loadingCharacters
  }
}