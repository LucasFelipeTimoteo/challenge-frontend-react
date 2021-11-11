import React from 'react'
import { ICharacterComics } from '../../hooks/useCharacterComics/types'
import CharacterData from '../../parts/Character/CharacterData'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import useStyles from './styles'
import getComicFOCDateInfoDate from './utils/getComicFOCDateInfoDate'
import getComicPrintPrice from './utils/getComicPrintPrice'

interface ICharacterInfoProps {
  characterComics: ICharacterComics[],
}

export default function CharacterInfo({
  characterComics,
}: ICharacterInfoProps) {
  const { characterInfoContainer } = useStyles()

  return (
    <div className={characterInfoContainer}>
      <CharacterData>
        {
          characterComics.map(comic => {
            const comicDate = getComicFOCDateInfoDate(comic.dates)
            const comicPrintPrice = getComicPrintPrice(comic.prices)
            
            return (
              <HorizontalCard
                comicName={comic.title}
                comicThumbnailPath={comic.thumbnail.path}
                comicThumbnailExtension={comic.thumbnail.extension}
                comicDescription={comic.description}
                comicDate={comicDate}
                characterComicsPageCount={comic.pageCount}
                comicPrintPrice={comicPrintPrice}
                key={comic.id}
                comic
              />
            )
          })
        }
      </CharacterData>
    </div>
  )
}
