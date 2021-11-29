import React from 'react'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useFavoriteCharactersProvider } from '../../contexts/favoriteCharacters/hooks/useFavoriteCharactersProvider'
import ResultsNotFound from '../../parts/GLOBAL/ResultsNotFound'

export default function Team() {
  const { favoriteCharacters } = useFavoriteCharactersProvider()

  return (
    <>
      <Header teamPage />
      <Hero teamPage />
      <CharactersList
        currentCharactersList={favoriteCharacters}
        teamPage
      />

      {
        (!favoriteCharacters || favoriteCharacters.length === 0) && (
          <ResultsNotFound />
        )
      }
    </>
  )
}
