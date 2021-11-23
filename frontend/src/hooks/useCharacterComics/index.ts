import md5 from "md5";
import { useEffect, useState } from "react";
import marvelComicsApi from "../../services/api/marvelComicsApi";
import getEnvVariables from "../utils/getEnvVariables";
import { ICharacterComics } from "./types";
import characterComicsTypeGuard from "./utils/characterComicsTypeGuard";

export default function useCharacterComics(characterId: number, inView: boolean) {
  const [characterComics, setCharacterComics] = useState<ICharacterComics[]>([])
  const [characterComicsCount, setCharacterComicsCount] = useState(0)
  const [loadingCharacterComics, setLoadingCharacterComics] = useState(false)

  const firstRenderFetchCondition = (characterId && characterComics.length === 0 && !loadingCharacterComics)
  const normalFetchCondition = (characterId && inView && !loadingCharacterComics)

  useEffect(() => {
    const getCharacterComic = async () => {
      setLoadingCharacterComics(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)

      const handleOffset = () => {
        const totalPageCharacters = characterComics.length
        const newOffset = String(totalPageCharacters)
        return newOffset
      }

      try {
        const api = marvelComicsApi({
          limit,
          publicKey,
          hash,
          timestamp,
          characterId: String(characterId),
          handleOffset
        })

        const apiRequest = await api('comics')

        const response = apiRequest.data
        const characterComicsCount = response.data.count
        const characterComicsList = response.data.results

        if (!characterComicsTypeGuard(characterComicsList)) {
          throw new Error('API response does not have correct type')
        }

        const characterComicsListWithoutDuplicates = characterComicsList.filter(responseComic => (
          characterComics.every(comic => responseComic.id !== comic.id)
        ))

        setCharacterComics(prev => [...prev, ...characterComicsListWithoutDuplicates])
        setCharacterComicsCount(characterComicsCount)

        setLoadingCharacterComics(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    if (firstRenderFetchCondition || normalFetchCondition) {
      getCharacterComic()
    }
  }, [characterId, firstRenderFetchCondition, normalFetchCondition, characterComics])

  return {
    characterComics,
    characterComicsCount,
    loadingCharacterComics
  }
}
