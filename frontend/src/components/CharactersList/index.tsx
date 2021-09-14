import React from 'react'
import Card from '../../parts/GLOBAL/Card'
import CardWrapper from '../../parts/GLOBAL/CardWrapper'
import useStyles from './styles'
import { CharacterListProps } from './types'

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
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
        <Card favorited={favorited} />
      </CardWrapper>
    </div>
  )
}