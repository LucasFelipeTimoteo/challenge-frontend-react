import { CardContent } from '@material-ui/core'
import React from 'react'
import useCardIsFocused from '../../../../hooks/useCardIsFocused'
import CardDescriptionReadMore from '../CardDescriptionReadMore'
import CharacterDescription from '../CharacterDescription'
import CharacterName from '../CharacterName'
import useStyles from './styles'
import { ICardTextContentProps } from './types'

export default function CardTextContent({
  characterDescription,
  characterName
}: ICardTextContentProps) {
  const { cardIsFocused, toggleCardIsFocused } = useCardIsFocused()
  const { textContentWrapper } = useStyles()

  return (
    <CardContent
      className={textContentWrapper}
      onClick={toggleCardIsFocused}
      data-testid="cardText"
    >
      <CharacterName characterName={characterName} />
      <CharacterDescription
        cardIsFocused={cardIsFocused}
        characterDescription={characterDescription}
      />

      <CardDescriptionReadMore cardIsFocused={cardIsFocused} />
    </CardContent>
  )
}
