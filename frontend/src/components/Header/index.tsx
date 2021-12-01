import {
  AppBar, Toolbar, useMediaQuery,
  useTheme
} from '@material-ui/core'
import React from 'react'
import useHeaderMenu from '../../hooks/useHeaderMenu'
import HamburguerMenu from '../../parts/GLOBAL/Header/HamburguerMenu'
import HamburguerMenuButton from '../../parts/GLOBAL/Header/HamburguerMenuButton'
import JoinTeamButton from '../../parts/GLOBAL/Header/JoinTeamButton'
import PageLogo from '../../parts/GLOBAL/Header/PageLogo'
import ToggleThemeButton from '../../parts/GLOBAL/ToggleThemeButton'
import useStyles from './styles'
import { HeaderProps } from './types'

export default function Header({ teamPage }: HeaderProps) {
  const { anchorEl, handleClose, handleMenu, open } = useHeaderMenu()
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

  const {
    appBar,
    headerContainer,
    headerButtonsContainer
  } = useStyles()

  return (
    <AppBar position="static" className={appBar}>
      <Toolbar className={headerContainer}>
        <PageLogo query={query} />

        {
          query && (
            <div className={headerButtonsContainer}>
              <ToggleThemeButton />
              {(!teamPage && query) && <JoinTeamButton />}
            </div>
          )
        }

        {!query && (
          <HamburguerMenuButton open={open} handleMenu={handleMenu} />
        )}

        {!query && (
          <HamburguerMenu
            anchorEl={anchorEl}
            open={open}
            teamPage={teamPage}
            handleClose={handleClose}
          />
        )}
      </Toolbar>
    </AppBar>
  )
}
