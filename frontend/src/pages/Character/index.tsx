import React from 'react'
import CharacterInfo from '../../components/CharacterInfo'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import SectionInfo from '../../parts/GLOBAL/SectionInfo'

export default function Character() {
  return (
    <>
      <Header />
      <Hero characterPage>
        <HorizontalCard />
      </Hero>
      <SectionInfo characterPage />
      <CharacterInfo />
    </>
  )
}
