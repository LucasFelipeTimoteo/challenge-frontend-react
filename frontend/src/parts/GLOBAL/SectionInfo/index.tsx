import React from 'react'
import SectionResults from './parts/SectionResults'
import SectionTitle from './parts/SectionTitle'
import useStyles from './styles'
import { SectionInfoProps } from './types'

export default function SectionInfo({
  characterPage,
  charactersPage
}: SectionInfoProps) {
  const {
    conditionalSectionInfoCharacterPage,
    sectionInfoContainer
  } = useStyles()

  return (
    <div className={
      `${sectionInfoContainer}
       ${characterPage && conditionalSectionInfoCharacterPage}`
    }>
      <SectionTitle
        characterPage={characterPage}
        charactersPage={charactersPage}
      />
      <SectionResults />
    </div>
  )
}
