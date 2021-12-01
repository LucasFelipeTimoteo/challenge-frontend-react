import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { IHorizontalCardDescriptionProps } from './types'

export default function HorizontalCardDescription({
  comicDescription,
  selectedCharacter,
  comic
}: IHorizontalCardDescriptionProps) {
  const { horizontalCardDescription } = useStyles()

  return (
    <Typography
      title={comicDescription || 'Description not provided'}
      variant="body2"
      className={horizontalCardDescription}
    >
      {
        (comic ? comicDescription : selectedCharacter.description) ||
        'Description not provided'
      }
    </Typography>
  )
}
