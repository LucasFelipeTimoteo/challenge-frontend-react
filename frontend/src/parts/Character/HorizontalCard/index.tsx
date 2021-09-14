import React, { useState } from 'react'
import {
  Card as CardContainer,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'

import {
  ArrowBack,
  CameraAlt,
  DateRange,
  MenuBook,
  Payment
} from '@material-ui/icons'

import wallpaper from '../../../assets/images/wallpaper.avif'
import useStyles from './styles'
import { HorizontalCardProps } from './types'

export default function HorizontalCard({ comic, id }: HorizontalCardProps) {
  const [cardImageFocused, setCardImageFocused] = useState(false)

  const toggleCardImageFocused = () => {
    setCardImageFocused(prev => !prev)
  }

  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`)

  const {
    horizontalCardContainer,
    horizontalCardInfo,
    horizontalCardMedia,
    conditionalComicHorizontalCardMedia,
    conditionalCardImageFocusedHorizontalCardMedia,

    comicInfo,
    conditionalComicHorizontalCardInfo,

    comicDateInfo,
    comicDateIcon,

    comicPagesInfo,
    comicPagesIcon,

    comicPriceInfo,
    comicPriceIcon,

    photoViwer,
  } = useStyles()

  return (
    <CardContainer className={horizontalCardContainer}>
      <CardMedia
        image={wallpaper}
        id={id}
        className={
          `${horizontalCardMedia}
           ${comic && conditionalComicHorizontalCardMedia}
           ${cardImageFocused && conditionalCardImageFocusedHorizontalCardMedia}`
        }
        onClick={toggleCardImageFocused}
      />

      <CardContent className={
        `${horizontalCardInfo}
         ${comic && conditionalComicHorizontalCardInfo}`
      }>
        <Typography variant="h2">
          {`${comic ? 'comic' : 'character'} name`}
        </Typography>

        {
          comic && (
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
          )
        }

        <Typography variant="body2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae dolorum iure ea necessitatibus repellat consequuntur libero vitae architecto fugit totam sint recusandae laboriosam cumque ut, repellendus ullam vel ab!
        </Typography>
      </CardContent>

      {
        query && (
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
    </CardContainer>
  )
}
