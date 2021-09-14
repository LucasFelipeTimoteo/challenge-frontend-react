import React from 'react'
import { Typography } from '@material-ui/core'
import { ArrowBack, CameraAlt } from '@material-ui/icons'
import useStyles from './styles'

type CardPhotoViwerProps = {
  comic?: boolean,
  cardImageFocused?: boolean,
  toggleCardImageFocused?: () => void
}

export default function CardPhotoViwer({
  comic,
  cardImageFocused,
  toggleCardImageFocused
}: CardPhotoViwerProps) {
  const { photoViwer } = useStyles()

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
