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
  },
  ref
) => {

  const {
    charactersListContainer,
    conditionalTeamPageCharactersListContainer
  } = useStyles()

  return (
    <div className={`
        ${charactersListContainer}
        ${teamPage && conditionalTeamPageCharactersListContainer}
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