import React from 'react'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import CardsPagination from '../../parts/GLOBAL/CardsPagination'

export default function Team() {
  return (
    <>
      <Header teamPage />
      <Hero teamPage />
      <CharactersList favorited teamPage />
      <CardsPagination teamPage />
    </>
  )
}
