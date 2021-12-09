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
import isLoading from './utils/isLoading'
import useLoadMoreData from '../../hooks/useLoadMoreData'

export default function Character() {
  const { selectedCharacter, loadingSelectedCharacter } = useSeletedCharacter()
  const { loadMoreData, toggleLoadMoreData } = useLoadMoreData()
  const { inView, ref } = useInView()

  const {
    characterComics,
    characterComicsResultsNumber,
    loadingCharacterComics,
    resultsFound
  } = useCharacterComics(selectedCharacter.id, inView, loadMoreData)

  const loadingCondition = isLoading(
    loadingCharacterComics,
    loadingSelectedCharacter,
    resultsFound
  )

  return (
    <>
      <Header />
      <Hero characterPage>
        <HorizontalCard />
      </Hero>
      <SectionInfo
        characterPage
        characterComicsResultsNumber={characterComicsResultsNumber}
        loadMoreData={loadMoreData}
        toggleLoadMoreData={toggleLoadMoreData}
      />
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