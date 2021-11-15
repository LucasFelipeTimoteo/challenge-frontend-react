import axios from "axios";

interface ImarvelCharactersApiProps {
  limit: string
  timestamp: string
  publicKey: string
  hash: string,
  handleOffset?: () => string
  nameStartsWith?: string
  characterId?: number
}

export default function marvelCharactersApi({
  limit,
  handleOffset,
  timestamp,
  publicKey,
  hash,
  nameStartsWith,
  characterId
}: ImarvelCharactersApiProps) {

  console.log(characterId)
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
    }
  })

  return api
}