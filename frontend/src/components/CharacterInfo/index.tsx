import React from 'react'
import CharacterData from '../../parts/Character/CharacterData'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import useStyles from './styles'

export default function CharacterInfo() {
  const { characterInfoContainer } = useStyles()

  return (
    <div className={characterInfoContainer}>
      <CharacterData>
        <HorizontalCard comic id="1" />
        <HorizontalCard comic id="2"/>
        <HorizontalCard comic id="3"/>
        <HorizontalCard comic id="4"/>
        <HorizontalCard comic id="5"/>
        <HorizontalCard comic id="6"/>
      </CharacterData>
    </div>
  )
}
