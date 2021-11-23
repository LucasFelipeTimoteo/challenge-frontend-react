import React, { forwardRef } from 'react'
import CharacterData from '../../parts/Character/CharacterData'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import useStyles from './styles'
import getComicFOCDateInfoDate from './utils/getComicFOCDateInfoDate'
import getComicPrintPrice from './utils/getComicPrintPrice'
import { ICharacterInfoProps } from './utils/types'

const CharacterInfo = forwardRef<Element, ICharacterInfoProps>((
  { characterComics },
  ref
) => {
  const { characterInfoContainer } = useStyles()

  return (
    <div className={characterInfoContainer}>
      <CharacterData>
        {
          characterComics.map((comic, comicIndex, comicArray) => {
            const comicDate = getComicFOCDateInfoDate(comic.dates)
            const comicPrintPrice = getComicPrintPrice(comic.prices)
            const lastVisibleHorizontalCard = comic.id === comicArray[comicArray.length - 1].id

            return (
              <HorizontalCard
                comicName={comic.title}
                comicThumbnailPath={comic.thumbnail.path}
                comicThumbnailExtension={comic.thumbnail.extension}
                comicDescription={comic.description}
                comicDate={comicDate}
                characterComicsPageCount={comic.pageCount}
                comicPrintPrice={comicPrintPrice}
                lastVisibleHorizontalCard={lastVisibleHorizontalCard}
                key={comic.id}
                ref={ref}
                comic
              />
            )
          })
        }
      </CharacterData>
    </div>
  )
})

export default CharacterInfo