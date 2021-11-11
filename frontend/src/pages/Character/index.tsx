import React from 'react'
import CharacterInfo from '../../components/CharacterInfo'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useSeletedUser } from '../../contexts/selectedCharacter'
import useCharacterComics from '../../hooks/useCharacterComics'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import SectionInfo from '../../parts/GLOBAL/SectionInfo'

export default function Character() {
  const { selectedCharacter } = useSeletedUser()

  const {
    characterComics,
    characterComicsCount,
  } = useCharacterComics(selectedCharacter.id)

  return (
    <>
      <Header />
      <Hero characterPage>
        <HorizontalCard />
      </Hero>
      <SectionInfo characterPage characterComicsCount={characterComicsCount} />
      <CharacterInfo
        characterComics={characterComics}
      />
    </>
  )
}