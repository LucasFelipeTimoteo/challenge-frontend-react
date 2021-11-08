export interface ISectionInfoProps  {
  charactersPage?: boolean,
  characterPage?: boolean,
  totalSearchResults?: number,
  totalResults?: number,
  searchResultsNotFound?: boolean,
  loadingSearchCharacters?: boolean,
  toggleLoadMoreData?: () => void,
  loadMoreData?: boolean,
  searchKey?: string
}