import { Typography } from '@material-ui/core'
import React from 'react'
import { IHorizontalCardNameProps } from './types'

export default function HorizontalCardName({
  comic,
  comicName,
  selectedCharacter
}: IHorizontalCardNameProps) {
  return (
    <Typography variant="h2">
      {comic ? comicName : selectedCharacter.name}
    </Typography>
  )
}
