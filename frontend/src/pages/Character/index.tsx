import React from 'react'
import CharacterInfo from '../../components/CharacterInfo'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useSeletedCharacter } from '../../contexts/selectedCharacter/hooks/useSelectedCharacterProvider'
import useCharacterComics from '../../hooks/useCharacterComics'
import HorizontalCard from '../../parts/Character/HorizontalCard'
import Loading from '../../parts/GLOBAL/Loading'
import SectionInfo from '../../parts/GLOBAL/SectionInfo'

export default function Character() {
  const { selectedCharacter, loadingSelectedCharacter } = useSeletedCharacter()
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
        inView={inView}
        ref={ref}
      />
      {loadingCondition && (
        <Loading />
      )}
    </>
  )
}