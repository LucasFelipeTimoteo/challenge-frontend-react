import React from 'react'
import CharacterInfo from '../../components/CharacterInfo'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useSeletedUser } from '../../contexts/selectedCharacter'
import useCharacterComics from '../../hooks/useCharacterComics'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import Loading from '../../parts/GLOBAL/Loading'
import SectionInfo from '../../parts/GLOBAL/SectionInfo'

export default function Character() {
  const { selectedCharacter, loadingSelectedCharacter } = useSeletedUser()
  const { inView, ref } = useInView()

  const {
    characterComics,
    characterComicsResultsNumber,
    loadingCharacterComics,
    resultsFound
  } = useCharacterComics(selectedCharacter.id, inView)

  const loadingCondition = (
    (loadingCharacterComics || loadingSelectedCharacter) && resultsFound
  )

  return (
    <>
      <Header />
      <Hero characterPage>
        <HorizontalCard />
      </Hero>
      <SectionInfo characterPage characterComicsResultsNumber={characterComicsResultsNumber} />
      <CharacterInfo
        characterComics={characterComics}
        ref={ref}
      />
      {loadingCondition && (
        <Loading />
      )}
    </>
  )
}