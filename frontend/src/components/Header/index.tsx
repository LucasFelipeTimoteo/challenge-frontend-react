import React from 'react'
import {
  Toolbar,
  Typography,
  AppBar,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'

import JoinTeamButton from '../../parts/GLOBAL/Header/JoinTeamButton'
import useStyles from './styles'
import ToggleThemeButton from '../../parts/GLOBAL/ToggleThemeButton'
import { Link } from 'react-router-dom'
import { HeaderProps } from './types'
import Logo from '../../parts/GLOBAL/Header/Logo'

export default function Header({ teamPage }: HeaderProps) {
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

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

          {query && <Logo />}

          <Typography variant="h1" className={title}>
            Marvel Strike Team
          </Typography>
        </Link>

        <div className={headerButtonsContainer}>
          <ToggleThemeButton />
          {!teamPage && <JoinTeamButton />}
        </div>
      </Toolbar>
    </AppBar>
  )
}
