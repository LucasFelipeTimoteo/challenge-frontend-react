import React from 'react'
import { Typography } from '@material-ui/core'
import { ArrowBack, CameraAlt } from '@material-ui/icons'
import useStyles from './styles'

type CardPhotoViwerProps = {
  comic: boolean,
  cardImageFocused?: boolean,
  toggleCardImageFocused?: () => void,
  query: boolean
}

export default function CardPhotoViwer({
  comic,
  cardImageFocused,
  toggleCardImageFocused,
  query
}: CardPhotoViwerProps) {
  const { photoViwer } = useStyles()

  if(!query) {
    return (
      <div className={photoViwer} />
    )
  }

  return (
    <div
      className={photoViwer}
      onClick={toggleCardImageFocused}
    >
      {cardImageFocused ? <ArrowBack /> : <CameraAlt />}

      <Typography variant="body2">
        click to view {
          cardImageFocused ?
            (`${comic ? 'comic' : 'character'} info`) :
            'image'
        }
      </Typography>
    </div>
  )
}
