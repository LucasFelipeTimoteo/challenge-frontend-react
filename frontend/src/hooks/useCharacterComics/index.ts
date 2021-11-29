import md5 from "md5";
import { useEffect, useState } from "react";
import marvelComicsApi from "../../services/api/marvelComicsApi";
import setLocalStorageData from "../../utils/setListToLocalStorage";
import getEnvVariables from "../utils/getEnvVariables";
import handleOffset from "../utils/handleOffset";
import { ICharacterComics } from "./types";
import getStorageCharacterComics from "./utils/getStorageCharacterComics";
import getStorageCharacterComicsResultsNumber from "./utils/getStorageCharacterComicsResultsNumber";
import characterComicsTypeGuard from "./utils/typeGuards/characterComicsTypeGuard";

export default function useCharacterComics(characterId: number, inView: boolean) {
  const characterComicsDefaultValue = getStorageCharacterComics(characterId)
  const characterComicsResultsNumberDefaultValue = getStorageCharacterComicsResultsNumber(characterId)

  const [characterComics, setCharacterComics] = useState<ICharacterComics[]>(characterComicsDefaultValue)
  const [characterComicsResultsNumber, setCharacterComicsResultsNumber] = useState(characterComicsResultsNumberDefaultValue)
  const [loadingCharacterComics, setLoadingCharacterComics] = useState(false)
  const [resultsFound, setResultsFound] = useState(true)

  const firstRenderFetchCondition = (
    (characterId && characterComics.length === 0 && !loadingCharacterComics) &&
    resultsFound
  )
  const normalFetchCondition = (
    (characterId && inView && !loadingCharacterComics) &&
    resultsFound
  )

  useEffect(() => {
    const getCharacterComic = async () => {
      setLoadingCharacterComics(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)
      const offset = handleOffset(characterComics)

      try {
        const api = marvelComicsApi({
          limit,
          publicKey,
          hash,
          timestamp,
          characterId: String(characterId),
          offset
        })

        const apiRequest = await api('comics')

        const response = apiRequest.data
        const comicsResultsNumber = response.data.total
        const characterComicsList = response.data.results

        if (!characterComicsTypeGuard(characterComicsList)) {
          throw new Error('API response does not have correct type')
        }

        setResultsFound(true)

        const characterComicsListWithoutDuplicates = characterComicsList.filter(responseComic => (
          characterComics.every(comic => responseComic.id !== comic.id)
        ))

        setCharacterComics(prev => [...prev, ...characterComicsListWithoutDuplicates])
        setCharacterComicsResultsNumber(comicsResultsNumber)

        const newComicsList = [...characterComics, ...characterComicsListWithoutDuplicates]
        setLocalStorageData('comics', { list: newComicsList, itemId: characterId })
        setLocalStorageData('comicsResultsNumber', { item: comicsResultsNumber, itemId: characterId })

        setLoadingCharacterComics(false)
      }
      catch (error) {
        console.log(error)
        setLoadingCharacterComics(false)
        setResultsFound(false)
      }
    }

    if (firstRenderFetchCondition || normalFetchCondition) {
      getCharacterComic()
    }
  }, [characterId, firstRenderFetchCondition, normalFetchCondition, characterComics])

  return {
    characterComics,
    characterComicsResultsNumber,
    loadingCharacterComics,
    resultsFound
  }
}
