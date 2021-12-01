import React from 'react'
import LoadMoreSwitch from './parts/LoadMoreSwitch'
import SectionResults from './parts/SectionResults'
import SectionTitle from './parts/SectionTitle'
import useStyles from './styles'
import { ISectionInfoProps } from './types'

export default function SectionInfo({
  characterPage,
  charactersPage,
  totalSearchResults,
  charactersCount,
  searchResultsNotFound,
  loadingSearchCharacters,
  toggleLoadMoreData,
  loadMoreData,
  searchKey,
  characterComicsResultsNumber
}: ISectionInfoProps) {
  const {
    characterPageSectionInfoContainer,
    sectionInfoContainer,
  } = useStyles()

  return (
    <div className={
      `${sectionInfoContainer}
       ${characterPage && characterPageSectionInfoContainer}`
    }>
      <SectionTitle
        characterPage={characterPage}
        charactersPage={charactersPage}
      />

      {(!searchKey && charactersPage) && (
        <LoadMoreSwitch
          loadMoreData={loadMoreData}
          toggleLoadMoreData={toggleLoadMoreData}
        />
      )}

      <SectionResults
        totalSearchResults={totalSearchResults}
        charactersCount={charactersCount}
        searchResultsNotFound={searchResultsNotFound}
        loadingSearchCharacters={loadingSearchCharacters}
        characterPage={characterPage}
        characterComicsResultsNumber={characterComicsResultsNumber}
      />
    </div>
  )
}
