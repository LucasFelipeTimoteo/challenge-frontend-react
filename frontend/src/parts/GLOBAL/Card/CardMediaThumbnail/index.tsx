import { CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { useSeletedCharacter } from '../../../../contexts/selectedCharacter/hooks/useSelectedCharacterProvider'
import useStyles from './styles'
import { ICardMediaThumbnailProps } from './types'

export default function CardMediaThumbnail({
  character,
  characterId,
  characterName,
  characterThumbnail,
  characterThumbnailExtension
}: ICardMediaThumbnailProps) {
  const history = useHistory()
  const { handleSelectedCharacter } = useSeletedCharacter()
  const { cardMedia, cardMediaOverlay } = useStyles()

  const goToCharacterInfoPage = () => {
    history.push(`character/${characterId}/comics`)
  }

  const handleCardMediaClick = () => {
    handleSelectedCharacter(character)
    goToCharacterInfoPage()
  }

  const imagePath = `${characterThumbnail}.${characterThumbnailExtension}`

  return (
    <CardMedia
      className={cardMedia}
      image={imagePath}
      onClick={handleCardMediaClick}
    >
      <Typography
        variant="subtitle2"
        component="p"
        className={cardMediaOverlay}
        title={`click here to explore ${characterName} related content`}
      >
        Expore character related content
      </Typography>
    </CardMedia>

  )
}
