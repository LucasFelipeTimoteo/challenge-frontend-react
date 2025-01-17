import md5 from "md5"
import { useEffect, useState } from "react"
import marvelApiInstance from "../../services/api/marvelCharactersApi"
import { ICharacter } from "../useCharacters/types"
import getEnvVariables from "../utils/getEnvVariables"
import { IUseSearchCharactersListProps } from "./types"

export default function useSearchCharactersList({ searchKey }: IUseSearchCharactersListProps) {
  const [searchCharactersList, setSearchCharactersList] = useState<ICharacter[]>([])
  const [totalSearchResults, setTotalSearchResults] = useState(0)
  const [loadingSearchCharacters, setSoadingSearchCharacters] = useState(false)

  useEffect(() => {
    if (!searchKey) {
      setTotalSearchResults(0)
    }

    const getSearchedCharacters = async () => {
      setSoadingSearchCharacters(true)

      const nameStartsWith = searchKey
      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)

      try {
        const api = marvelApiInstance({
          limit,
          publicKey,
          nameStartsWith,
          hash,
          timestamp
        })
        const apiRequest = await api('characters')

        const response = apiRequest.data
        const resultsNumber = response.data.total
        const searchedCharactersList = response.data.results

        setTotalSearchResults(resultsNumber)
        setSearchCharactersList(searchedCharactersList)
        setSoadingSearchCharacters(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    if (searchKey) {
      getSearchedCharacters()
    }
  }, [searchKey])

  return {
    searchCharactersList,
    totalSearchResults,
    loadingSearchCharacters
  }
}