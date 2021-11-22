import React from 'react'
import { Typography } from '@material-ui/core'
import { DateRange, MenuBook, Payment } from '@material-ui/icons'
import useStyles from './styles'
import { IComicInfoProps } from './types'

export default function ComicInfo({
  comicDate,
  characterComicsPageCount,
  comicPrintPrice
}: IComicInfoProps) {
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
        <div
          className={comicDateInfo}
          title={`Release date: ${comicDate || 'Unavailable'}`}
        >
          <DateRange className={comicDateIcon} />
          <Typography>{comicDate || 'Unavailable date'}</Typography>
        </div>

        <div
          className={comicPagesInfo}
          title={`number of pages: ${characterComicsPageCount || 'Unavailable'}`}
        >
          <MenuBook className={comicPagesIcon} />
          <Typography>{characterComicsPageCount || 'Unavailable'} pages</Typography>
        </div>

        <div
          className={comicPriceInfo}
          title={`comic price (print comic): U$ ${comicPrintPrice || 'Unavailable'}`}
        >
          <Payment className={comicPriceIcon} />
          <Typography>U$ {comicPrintPrice || 'Unavailable'}</Typography>
        </div>
      </div>
    </div>
  )
}
