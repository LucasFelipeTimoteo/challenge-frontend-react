import md5 from "md5";
import { useEffect, useState } from "react";
import marvelComicsApi from "../../services/api/marvelComicsApi";
import getEnvVariables from "../utils/getEnvVariables";
import { ICharacterComics } from "./types";
import characterComicsTypeGuard from "./utils/characterComicsTypeGuard";

export default function useCharacterComics(characterId: number) {
  const [characterComics, setCharacterComics] = useState<ICharacterComics[]>([])
  const [characterComicsCount, setCharacterComicsCount] = useState(0)
  const [loadingCharacterComics, setLoadingCharacterComics] = useState(false)

  useEffect(() => {
    const getCharacterComic = async () => {
      setLoadingCharacterComics(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)

      try {
        const api = marvelComicsApi({
          limit,
          publicKey,
          hash,
          timestamp,
          characterId: String(characterId)
        })
        const apiRequest = await api('comics')

        const response = apiRequest.data
        const characterComicsCount = response.data.count
        const characterComicsList = response.data.results

        if(!characterComicsTypeGuard(characterComicsList)) {
          throw new Error('API response does not have correct type')
        }

        setCharacterComics(prev => [...prev, ...characterComicsList])
        setCharacterComicsCount(characterComicsCount)
        setLoadingCharacterComics(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    if (characterId) {
      getCharacterComic()
    }
  }, [characterId])

  return {
    characterComics,
    characterComicsCount,
    loadingCharacterComics
  }
}
