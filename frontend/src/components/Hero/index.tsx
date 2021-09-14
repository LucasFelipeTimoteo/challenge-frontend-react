import { Typography } from '@material-ui/core'
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
  const {
    HeroContainer,
    teamPageConditionalHeroContainer,
    heroContentContainer,
    characterConditionalHeroContentContainer,
    heroText,
  } = useStyles()

  return (
    <div className={
      `${HeroContainer}
       ${teamPage && teamPageConditionalHeroContainer}`
    }>

      <div className={
        `${heroContentContainer}
         ${characterPage && characterConditionalHeroContentContainer}`
      }>

        <ReturnPageButton charactersPage={charactersPage} />
        
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
