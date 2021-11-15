import md5 from "md5";
import { useEffect, useState } from "react";
import getURLPathId from "../../utils/getURLPathId";
import marvelComicsApi from "../../services/api/marvelComicsApi";
import getEnvVariables from "../utils/getEnvVariables";
import { ICharacterComics } from "./types";

export default function useCharacterComics(characterId: number) {
  const [characterComics, setCharacterComics] = useState<ICharacterComics[]>([])
  const [characterComicsCount, setCharacterComicsCount] = useState(0)
  const [loadingCharacterComics, setLoadingCharacterComics] = useState(false)

  const pathId = getURLPathId()

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
          characterId: String(pathId) || String(characterId)
        })
        const apiRequest = await api('comics')

        const response = apiRequest.data
        const characterComicsCount = response.data.count
        const characterComicsList = response.data.results

        setCharacterComics(prev => [...prev, ...characterComicsList])
        setCharacterComicsCount(characterComicsCount)
        setLoadingCharacterComics(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    if (characterId || pathId) {
      getCharacterComic()
    }
  }, [characterId, pathId])

  return {
    characterComics,
    characterComicsCount,
    loadingCharacterComics
  }
}
