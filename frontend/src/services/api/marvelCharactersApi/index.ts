import axios from "axios";
import { ImarvelCharactersApiProps } from "./types";

export default function marvelCharactersApi({
  limit,
  handleOffset,
  timestamp,
  publicKey,
  hash,
  nameStartsWith,
}: ImarvelCharactersApiProps) {
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