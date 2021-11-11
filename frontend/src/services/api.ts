import axios from "axios";

interface IMarvelApiInstanceProps {
  limit: string
  timestamp: string
  publicKey: string
  hash: () => string,
  handleOffset?: () => string
  nameStartsWith?: string
  characterId?: string
}

export default function marvelApiInstance({
  limit,
  handleOffset,
  timestamp,
  publicKey,
  hash,
  nameStartsWith,
  characterId
}: IMarvelApiInstanceProps) {
  const api = axios.create({
    method: 'GET',
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
      limit,
      ts: timestamp,
      apikey: publicKey,
      hash: hash(),
      ...(handleOffset && { offset: handleOffset() }),
      ...(nameStartsWith && { nameStartsWith }),
      ...(characterId && { characters: characterId })
    }
  })

  return api
}