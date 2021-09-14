import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

export default function SectionResults() {
  const { sectionResultsText } = useStyles()

  return (
    <Typography
      variant="h6"
      component="h3"
      className={sectionResultsText}
    >
      # results
    </Typography>
  )
}
