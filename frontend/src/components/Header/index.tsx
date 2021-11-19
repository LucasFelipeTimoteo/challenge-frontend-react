import {
  AppBar, IconButton, Menu,
  MenuItem, Toolbar,
  Typography, useMediaQuery, useTheme
} from '@material-ui/core'
import { Close, Menu as MenuIcon } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import useHeaderMenu from '../../hooks/useHeaderMenu'
import JoinTeamButton from '../../parts/GLOBAL/Header/JoinTeamButton'
import Logo from '../../parts/GLOBAL/Header/Logo'
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
    headerMainInformationLink,
    title,
    headerButtonsContainer,
    hamburguerMenuIcon,
    menuItemContainer
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

        {
          query && (
            <div className={headerButtonsContainer}>
              <ToggleThemeButton />
              {(!teamPage && query) && <JoinTeamButton />}
            </div>
          )
        }

        {!query && (
          <IconButton onClick={handleMenu} className={hamburguerMenuIcon}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {!query && (
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
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
            <MenuItem className={menuItemContainer}>
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
