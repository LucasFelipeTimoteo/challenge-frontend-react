import React from 'react'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useFavoriteCharacterProvider } from '../../contexts/favoritedCharacters'
import ResultsNotFound from '../../parts/GLOBAL/ResultsNotFound'

export default function Team() {
  const { favoriteCharacters } = useFavoriteCharacterProvider()
  console.log(favoriteCharacters)

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
