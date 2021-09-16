import React from 'react'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

export default function Team() {
  return (
    <>
      <Header teamPage />
      <Hero teamPage />
      <CharactersList favorited teamPage />
    </>
  )
}
