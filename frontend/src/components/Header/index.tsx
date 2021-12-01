import {
  AppBar, Menu,
  MenuItem,
  Toolbar, useMediaQuery,
  useTheme
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import useHeaderMenu from '../../hooks/useHeaderMenu'
import HamburguerMenuButton from '../../parts/GLOBAL/Header/HamburguerMenuButton'
import JoinTeamButton from '../../parts/GLOBAL/Header/JoinTeamButton'
import PageLogo from '../../parts/GLOBAL/Header/PageLogo'
import ToggleThemeButton from '../../parts/GLOBAL/ToggleThemeButton'
import { useMUITheme } from '../../styles/themes/MUITheme'
import useStyles from './styles'
import { HeaderProps } from './types'

export default function Header({ teamPage }: HeaderProps) {
  const { anchorEl, handleClose, handleMenu, open } = useHeaderMenu()
  const { breakpoints } = useTheme()
  const { togglePageTheme } = useMUITheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

  const {
    appBar,
    headerContainer,
    headerButtonsContainer,
    menuItemContainer
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
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem className={menuItemContainer}>
              {!teamPage && <JoinTeamButton />}
            </MenuItem>
            <MenuItem className={menuItemContainer} onClick={togglePageTheme}>
              <ToggleThemeButton />
            </MenuItem>
            <MenuItem onClick={handleClose} className={menuItemContainer}>
              <Close />
              sair
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  )
}
