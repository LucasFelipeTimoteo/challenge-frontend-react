import React from 'react'
import { Typography } from '@material-ui/core'
import { DateRange, MenuBook, Payment } from '@material-ui/icons'
import useStyles from './styles'

export default function ComicInfo() {
  const {
    comicDateIcon,
    comicDateInfo,
    comicInfo,
    comicPagesIcon,
    comicPagesInfo,
    comicPriceIcon,
    comicPriceInfo
  } = useStyles()

  return (
    <div>
      <div className={comicInfo}>
        <div className={comicDateInfo}>
          <DateRange className={comicDateIcon} />
          <Typography>99/99/9999</Typography>
        </div>

        <div className={comicPagesInfo}>
          <MenuBook className={comicPagesIcon} />
          <Typography>99 pages</Typography>
        </div>

        <div className={comicPriceInfo}>
          <Payment className={comicPriceIcon} />
          <Typography>U$ 0.99</Typography>
        </div>
      </div>
    </div>
  )
}
