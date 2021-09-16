import React from 'react'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Searchbar from '../../parts/CharactersList/Searchbar'
import SectionInfo from '../../parts/GLOBAL/SectionInfo'

export default function Characters() {
  return (
    <>
      <Header />
      <Hero charactersPage>
        <Searchbar />
      </Hero>

      <SectionInfo charactersPage />
      <CharactersList />
    </>
  )
}
