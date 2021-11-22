import axios from "axios";
import { IMarvelComicsApiProps } from "./types";

export default function marvelComicsApi({
  limit,
  handleOffset,
  timestamp,
  publicKey,
  hash,
  nameStartsWith,
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
      ...(handleOffset && { offset: handleOffset() }),
      ...(nameStartsWith && { nameStartsWith }),
      ...(characterId && { characters: characterId })
    }
  })

  return api
}