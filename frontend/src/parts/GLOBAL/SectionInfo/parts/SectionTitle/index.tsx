import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

type SectionTitleProps = {
  charactersPage?: boolean,
  characterPage?: boolean,
}

const sectionTitleDescriptionTitle = (
  characterPage: boolean | undefined,
  charactersPage: boolean | undefined
) => {
  if (charactersPage || characterPage) {
    return (
      (charactersPage && 'Characters section') ||
      (characterPage && 'Comics section')
    )
  }
}

export default function SectionTitle({
  characterPage,
  charactersPage
}: SectionTitleProps) {
  const { sectionTitle } = useStyles()

  return (
    <Typography
      variant="h1"
      component="h3"
      title={`${sectionTitleDescriptionTitle(characterPage, charactersPage)}`}
      className={sectionTitle}
    >
      {characterPage && 'Comics'}
      {charactersPage && 'Characters'}
    </Typography>
  )
}
