import md5 from "md5";
import { useEffect, useMemo, useState } from "react";
import marvelApiInstance from "../../services/api";
import getEnvVariables from "../utils/getEnvVariables";
import { ICharacterComics } from "./types";

export default function useCharacterComics(characterId: number) {
  const [characterComics, setCharacterComics] = useState<ICharacterComics[]>([])
  const [characterComicsCount, setCharacterComicsCount] = useState(0)
  const [loadingCharacterComics, setLoadingCharacterComics] = useState(false)

  useEffect(() => {
    const getCharacterComic = async () => {
      setLoadingCharacterComics(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()

      const hash = () => {
        const hashMd5 = md5(timestamp + privateKey + publicKey)
        return hashMd5
      }

      try {
        const api = marvelApiInstance({
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
