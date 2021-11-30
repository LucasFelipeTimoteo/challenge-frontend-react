import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { ICardDescriptionReadMoreProps } from './types'

export default function CardDescriptionReadMore({
  cardIsFocused
}: ICardDescriptionReadMoreProps) {
  const { readMoreGradientWrapper, readMoreText } = useStyles()

  return (
    <div className={readMoreGradientWrapper}>
      <Typography
        variant="caption"
        component="p"
        className={readMoreText}
      >
        {
          cardIsFocused
            ?
            'click to close full read'
            :
            'Click to full read'
        }
      </Typography>
    </div>
  )
}
