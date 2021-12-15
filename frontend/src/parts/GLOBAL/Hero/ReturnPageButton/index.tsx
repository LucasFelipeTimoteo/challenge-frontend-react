import { Typography } from '@material-ui/core'
import { KeyboardReturn } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import useStyles from './styles'

export default function ReturnPageButton() {
  const { goBack } = useHistory()
  const { returnToPreviousPageButtonWrapper } = useStyles()

  return (
    <div
      className={returnToPreviousPageButtonWrapper}
      onClick={goBack}
      data-testid="returnButton"
    >
      <Typography>
        Return to previous page
      </Typography>
      <KeyboardReturn />
    </div>
  )
}
