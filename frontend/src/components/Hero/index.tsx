import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { KeyboardReturn } from '@material-ui/icons'
import { useHistory } from 'react-router'
import { useStyles } from './styles'
import { HeroProps } from './types'

export default function Hero({
  children,
  characterPage,
  charactersPage,
  teamPage
}: HeroProps) {
  const { goBack } = useHistory()
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

  const {
    HeroContainer,
    teamPageConditionalHeroContainer,
    heroContentContainer,
    characterConditionalHeroContentContainer,
    heroText,
    returnToPreviousPageButtonWrapper
  } = useStyles()

  return (
    <div className={`
      ${HeroContainer}
      ${teamPage && teamPageConditionalHeroContainer}`} >
      <div className={
        `${heroContentContainer}
         ${characterPage && characterConditionalHeroContentContainer}`
      }>

        {
          (!charactersPage && query) && (
            <div
              className={returnToPreviousPageButtonWrapper}
              onClick={goBack}
            >
              <Typography>
                Return to previous page
              </Typography>
              <KeyboardReturn />
            </div>
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
