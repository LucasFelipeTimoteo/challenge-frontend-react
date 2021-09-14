import React from 'react'
import {
  Toolbar,
  Typography,
  AppBar,
} from '@material-ui/core'

import JoinTeamButton from '../../parts/GLOBAL/Header/JoinTeamButton'
import useStyles from './styles'
import ToggleThemeButton from '../../parts/GLOBAL/ToggleThemeButton'
import { Link } from 'react-router-dom'
import { HeaderProps } from './types'
import Logo from '../../parts/Header/Logo'

export default function Header({ teamPage }: HeaderProps) {
  const {
    appBar,
    headerContainer,
    headerMainInformationLink,
    title,
    headerButtonsContainer
  } = useStyles()

  return (
    <AppBar position="static" className={appBar}>
      <Toolbar className={headerContainer}>
        <Link
          to="/"
          title="Click to go to homepage"
          className={headerMainInformationLink}
        >
          <Logo />

          <Typography variant="h1" className={title}>
            Marvel Strike Team
          </Typography>
        </Link>

        <div className={headerButtonsContainer}>
          <ToggleThemeButton />
          <JoinTeamButton teamPage={teamPage} />
        </div>
      </Toolbar>
    </AppBar>
  )
}
