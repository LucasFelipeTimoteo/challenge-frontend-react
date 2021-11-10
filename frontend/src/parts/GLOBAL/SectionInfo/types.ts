export interface ISectionInfoProps  {
  charactersPage?: boolean,
  characterPage?: boolean,
  totalSearchResults?: number,
  totalCharactersResults?: number,
  searchResultsNotFound?: boolean,
  loadingSearchCharacters?: boolean,
  toggleLoadMoreData?: () => void,
  loadMoreData?: boolean,
  searchKey?: string
  characterComicsCount?: number
}