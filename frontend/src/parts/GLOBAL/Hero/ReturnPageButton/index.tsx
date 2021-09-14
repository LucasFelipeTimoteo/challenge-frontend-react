import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { useHistory } from 'react-router'
import { KeyboardReturn } from '@material-ui/icons'
import useStyles from './styles'
import { ReturnPageButtonProps } from './types'

export default function ReturnPageButton({ charactersPage }: ReturnPageButtonProps) {
  const { goBack } = useHistory()
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

  const { returnToPreviousPageButtonWrapper } = useStyles()

  if (charactersPage && !query) {
    return null
  }

  return (
    <div
      className={returnToPreviousPageButtonWrapper}
      onClick={goBack}
    >
      <Typography>
        Return to previous page
      </Typography>
      <KeyboardReturn />
    </div>
  )
}
