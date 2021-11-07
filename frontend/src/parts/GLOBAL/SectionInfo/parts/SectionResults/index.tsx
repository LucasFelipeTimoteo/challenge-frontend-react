import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ISectionResultsProps } from './types'

export default function SectionResults({
  totalSearchResults,
  totalResults,
  searchResultsNotFound,
  loadingSearchCharacters
}: ISectionResultsProps) {
  const { sectionResultsText } = useStyles()

  const currentCharactersListTotalResults = totalSearchResults ? totalSearchResults : totalResults

  const totalResultsNumberDisplay = (
    searchResultsNotFound || !currentCharactersListTotalResults || loadingSearchCharacters
  ) ? '0' : currentCharactersListTotalResults

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
