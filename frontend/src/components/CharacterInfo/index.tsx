import React from 'react'
import { characters } from '../../mocks/characters.mock.dev'
import CharacterData from '../../parts/Character/CharacterData'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import useStyles from './styles'

export default function CharacterInfo() {
  const { characterInfoContainer } = useStyles()

  return (
    <div className={characterInfoContainer}>
      <CharacterData>
        {
          characters.results.map(character => (
            <HorizontalCard
            characterThumbnail={character.thumbnail.path}
            characterThumbnailExtension={character.thumbnail.extension}
            characterName={character.name}
            characterDescription={character.description}

            comic
            comicThumbnail={character.comics.items[0].resourceURI}
            />
          ))
        }
      </CharacterData>
    </div>
  )
}
