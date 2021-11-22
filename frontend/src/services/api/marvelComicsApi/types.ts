export interface IMarvelComicsApiProps {
  limit: string
  timestamp: string
  publicKey: string
  hash: string,
  handleOffset?: () => string
  nameStartsWith?: string
  characterId?: string
}