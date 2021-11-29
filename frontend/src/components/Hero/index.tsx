import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import ReturnPageButton from '../../parts/GLOBAL/Hero/ReturnPageButton'
import { useStyles } from './styles'
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
    characterConditionalHeroContentContainer,
    heroText,
  } = useStyles()

  return (
    <div className={
      `${HeroContainer}
       ${teamPage && teamPageHeroContainer}`
    }>

      <div className={
        `${heroContentContainer}
         ${characterPage && characterConditionalHeroContentContainer}`
      }>

        {
          (!charactersPage && query) && (
            <ReturnPageButton />
          )
        }

        <Typography
          variant="h1"
          component="h2"
          className={heroText}
        >
          {charactersPage && 'Explore the most powerful chacters in Marvel'}
          {characterPage && 'Discover all comics this character took part in'}
          {teamPage && 'Here is your own strike team choice'}
        </Typography>

        {children}
      </div>
    </div>
  )
}
