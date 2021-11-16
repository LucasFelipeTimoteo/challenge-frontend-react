import md5 from "md5"
import { useEffect, useState } from "react"
import marvelApiInstance from "../../services/api/marvelCharactersApi"
import { ICharacter } from "../useCharacters/types"
import charactersListTypeGuard from "../useCharacters/utils/typeGuards/charactersListTypeGuard"
import getEnvVariables from "../utils/getEnvVariables"

type useSearchCharactersListProps = {
  searchKey?: string
}

export default function useSearchCharactersList({ searchKey }: useSearchCharactersListProps) {
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

        if(!charactersListTypeGuard(searchedCharactersList)) {
          throw new Error('API response does not have correct type')
        }

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