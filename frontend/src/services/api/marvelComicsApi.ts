import axios from "axios";

interface IMarvelComicsApiProps {
  limit: string
  timestamp: string
  publicKey: string
  hash: () => string,
  handleOffset?: () => string
  nameStartsWith?: string
  characterId?: string
}

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
      hash: hash(),
      ...(handleOffset && { offset: handleOffset() }),
      ...(nameStartsWith && { nameStartsWith }),
      ...(characterId && { characters: characterId })
    }
  })

  return api
}