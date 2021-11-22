export interface ImarvelCharactersApiProps {
  limit: string
  timestamp: string
  publicKey: string
  hash: string,
  handleOffset?: () => string
  nameStartsWith?: string
}