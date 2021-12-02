import { Typography } from '@material-ui/core'
import React, { memo } from 'react'
import useStyles from './styles'
import { ISectionResultsProps } from './types'

function SectionResults({
  totalSearchResults,
  charactersCount,
  searchResultsNotFound,
  loadingSearchCharacters,
  characterPage,
  characterComicsResultsNumber
}: ISectionResultsProps) {
  const { sectionResultsText } = useStyles()
  const currentListTotalResults = totalSearchResults || (
    characterPage ? characterComicsResultsNumber : charactersCount
  )

  const totalResultsNumberDisplay = (
    searchResultsNotFound || !currentListTotalResults || loadingSearchCharacters
  ) ? '0' : currentListTotalResults

  return (
    <Typography
      variant="h6"
      component="h3"
      className={sectionResultsText}
    >
      {totalResultsNumberDisplay} results
    </Typography>
  )
}

export default memo(SectionResults)