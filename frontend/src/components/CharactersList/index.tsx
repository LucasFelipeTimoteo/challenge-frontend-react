import React from 'react'
import Card from '../../parts/GLOBAL/Card'
import CardWrapper from '../../parts/GLOBAL/CardWrapper'
import useStyles from './styles'
import { CharacterListProps } from './types'

import { characters } from '../../mocks/characters.mock.dev'


export default function CharactersList({ favorited, teamPage }: CharacterListProps) {
  const {
    charactersListContainer,
    conditionalTeamPageCharactersListContainer
  } = useStyles()

  return (
    <div className={`
      ${charactersListContainer}
      ${teamPage && conditionalTeamPageCharactersListContainer}
    `}>

      <CardWrapper>
        {
          characters.results.map((character: any) => (
            <Card
              favorited={favorited}
              thumbnail={character.thumbnail.path}
              extension={character.thumbnail.extension}
              characterName={character.name}
              characterDescription={character.description}
            />
          ))
        }
      </CardWrapper>
      
    </div>
  )
}
