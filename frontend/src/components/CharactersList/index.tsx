import React, { forwardRef } from 'react'
import Card from '../../parts/GLOBAL/Card'
import CardWrapper from '../../parts/GLOBAL/CardWrapper'
import useStyles from './styles'
import { CharacterListProps } from './types'

const CharactersList = forwardRef<Element, CharacterListProps>((
  {
    teamPage,
    currentCharactersList,
    searchResultsNotFound,
    loadingSearchCharacters,
    inView
  },
  ref
) => {

  const {
    charactersListContainer,
    teamPageCharactersListContainer
  } = useStyles()

  return (
    <div className={`
        ${charactersListContainer}
        ${teamPage && teamPageCharactersListContainer}
        `}>

      <CardWrapper>
        {
          (!searchResultsNotFound && !loadingSearchCharacters) && (
            currentCharactersList.map((character, characterIndex, charactersArray) => {
              const lastVisibleCharacter = character.id === charactersArray[charactersArray.length - 1].id

              return (
                <Card
                  character={character}
                  characterThumbnail={character.thumbnail.path}
                  characterThumbnailExtension={character.thumbnail.extension}
                  characterId={character.id}
                  characterName={character.name}
                  characterDescription={character.description}

                  key={character.id}
                  lastVisibleCharacter={lastVisibleCharacter}
                  inView={inView}
                  ref={ref}
                />
              )
            })
          )
        }
      </CardWrapper>
    </div>
  )
})

export default CharactersList