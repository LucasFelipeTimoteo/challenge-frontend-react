import React from 'react'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useFavoriteCharacterProvider } from '../../contexts/favoritedCharacters'

export default function Team() {
  const { favoriteCharacters } = useFavoriteCharacterProvider()

  return (
    <>
      <Header teamPage />
      <Hero teamPage />
      <CharactersList
        currentCharactersList={favoriteCharacters}
        teamPage
      />
    </>
  )
}
