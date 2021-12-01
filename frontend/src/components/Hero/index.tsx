import { useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import PagePresentationText from '../../parts/GLOBAL/Hero/PagePresentationText'
import ReturnPageButton from '../../parts/GLOBAL/Hero/ReturnPageButton'
import useStyles from './styles'
import { HeroProps } from './types'

export default function Hero({
  children,
  characterPage,
  charactersPage,
  teamPage
}: HeroProps) {
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

  const {
    HeroContainer,
    teamPageHeroContainer,
    heroContentContainer,
    characterPageHeroContentContainer,
  } = useStyles()

  return (
    <div className={
      `${HeroContainer}
       ${teamPage && teamPageHeroContainer}`
    }>

      <div className={
        `${heroContentContainer}
         ${characterPage && characterPageHeroContentContainer}`
      }>

        {
          (!charactersPage && query) && (
            <ReturnPageButton />
          )
        }

        <PagePresentationText
          characterPage={characterPage}
          charactersPage={charactersPage}
          teamPage={teamPage}
        />

        {children}
      </div>
    </div>
  )
}
