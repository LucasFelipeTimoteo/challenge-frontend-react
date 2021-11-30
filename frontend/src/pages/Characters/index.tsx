import React, { useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import CharactersList from '../../components/CharactersList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import useCharacters from '../../hooks/useCharacters'
import useLoadMoreData from '../../hooks/useLoadMoreData'
import useSearch from '../../hooks/useSearch/intex'
import useSearchCharactersList from '../../hooks/useSearchCharactersList'
import Searchbar from '../../parts/CharactersList/Searchbar'
import Loading from '../../parts/GLOBAL/Loading'
import ResultsNotFound from '../../parts/GLOBAL/ResultsNotFound'
import SectionInfo from '../../parts/GLOBAL/SectionInfo'

export default function Characters() {
  const { ref, inView } = useInView()
  const { loadMoreData, toggleLoadMoreData } = useLoadMoreData()
  const {
    searchValue,
    handleSearchValue,
    searchKey,
    handleSearchKey
  } = useSearch()

  const {
    searchCharactersList,
    totalSearchResults,
    loadingSearchCharacters
  } = useSearchCharactersList({ searchKey })

  const {
    characters,
    loadingCharacters,
    charactersCount,
    resultsFound
  } = useCharacters(inView, loadMoreData, searchKey)

  const searchResultsNotFound = Boolean(
    searchCharactersList.length === 0 &&
    searchKey &&
    !loadingSearchCharacters
  )

  const loadingCondition = (
    (loadingCharacters || loadingSearchCharacters) &&
    !searchResultsNotFound &&
    resultsFound
  )
  const currentCharactersList = (
    searchCharactersList.length > 0 &&
      searchKey ? searchCharactersList : characters
  )

  return (
    <>
      <Header />
      <Hero charactersPage>
        <Searchbar
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
          handleSearchKey={handleSearchKey}
        />
      </Hero>

      <SectionInfo
        charactersPage
        totalSearchResults={totalSearchResults}
        charactersCount={charactersCount}
        searchResultsNotFound={searchResultsNotFound}
        loadingSearchCharacters={loadingSearchCharacters}
        loadMoreData={loadMoreData}
        toggleLoadMoreData={toggleLoadMoreData}
        searchKey={searchKey}
      />

      <CharactersList
        currentCharactersList={currentCharactersList}
        searchResultsNotFound={searchResultsNotFound}
        loadingSearchCharacters={loadingSearchCharacters}
        inView={inView}
        ref={ref}
      />

      {
        loadingCondition && (
          <Loading />
        )
      }

      {
        searchResultsNotFound && (
          <ResultsNotFound />
        )
      }
    </>
  )
}
