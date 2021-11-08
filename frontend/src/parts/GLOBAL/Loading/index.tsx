import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

export default function Loading() {
  const { loadingContainer } = useStyles()

  return (
    <div className={loadingContainer}>
      <Typography variant="h2" component="h3">
        LOADING...
      </Typography>
    </div>
  )
}
