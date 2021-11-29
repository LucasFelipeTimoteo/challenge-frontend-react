import axios from "axios";
import { IMarvelComicsApiProps } from "./types";

export default function marvelComicsApi({
  limit,
  offset,
  timestamp,
  publicKey,
  hash,
  characterId
}: IMarvelComicsApiProps) {
  const api = axios.create({
    method: 'GET',
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
      limit,
      ts: timestamp,
      apikey: publicKey,
      hash,
      offset,
      ...(characterId && { characters: characterId })
    }
  })

  return api
}