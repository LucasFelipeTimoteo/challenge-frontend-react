import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

export default function ResultsNotFound() {
  const { ResultsNotFoundContainer } = useStyles()

  return (
    <div className={ResultsNotFoundContainer}>
      <Typography variant="h2" component="h3">
        Results not found
      </Typography>
    </div>
  )
}
