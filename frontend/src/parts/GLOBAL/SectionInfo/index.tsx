import { FormControlLabel, Switch } from '@material-ui/core'
import React from 'react'
import SectionResults from './parts/SectionResults'
import SectionTitle from './parts/SectionTitle'
import useStyles from './styles'
import { ISectionInfoProps } from './types'

export default function SectionInfo({
  characterPage,
  charactersPage,
  totalSearchResults,
  totalResults,
  searchResultsNotFound,
  loadingSearchCharacters,
  toggleLoadMoreData,
  loadMoreData,
  searchKey
}: ISectionInfoProps) {
  const {
    conditionalSectionInfoCharacterPage,
    sectionInfoContainer,
    loadMoredataSwitchLabel
  } = useStyles()

  return (
    <div className={
      `${sectionInfoContainer}
       ${characterPage && conditionalSectionInfoCharacterPage}`
    }>
      <SectionTitle
        characterPage={characterPage}
        charactersPage={charactersPage}
      />

      {!searchKey && (
        <FormControlLabel
          className={loadMoredataSwitchLabel}
          label="Load more"
          title={`Click to ${loadMoreData ? 'disable' : 'activate'} more data load`}
          control={
            <Switch
              size="medium"
              color="primary"
              name="load more"
              checked={loadMoreData}
              onChange={toggleLoadMoreData}
            />
          }
        />
      )}

      <SectionResults
        totalSearchResults={totalSearchResults}
        totalResults={totalResults}
        searchResultsNotFound={searchResultsNotFound}
        loadingSearchCharacters={loadingSearchCharacters}
      />
    </div>
  )
}
