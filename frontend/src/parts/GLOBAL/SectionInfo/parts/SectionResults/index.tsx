import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ISectionResultsProps } from './types'

export default function SectionResults({
  totalSearchResults,
  charactersCount,
  searchResultsNotFound,
  loadingSearchCharacters,
  characterPage,
  characterComicsCount
}: ISectionResultsProps) {
  const { sectionResultsText } = useStyles()
  const currentListTotalResults = totalSearchResults || (
    characterPage ? characterComicsCount : charactersCount
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
