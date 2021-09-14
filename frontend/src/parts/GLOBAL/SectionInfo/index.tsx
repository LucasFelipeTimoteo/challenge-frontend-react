import React from 'react'
import SectionResults from './parts/SectionResults'
import SectionTitle from './parts/SectionTitle'
import useStyles from './styles'

type SectionInfoProps = {
  charactersPage?: boolean,
  characterPage?: boolean,
}

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
