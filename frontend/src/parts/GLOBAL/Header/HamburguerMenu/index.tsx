import { Menu, MenuItem } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import { useMUITheme } from '../../../../styles/themes/MUITheme'
import ToggleThemeButton from '../../ToggleThemeButton'
import JoinTeamButton from '../JoinTeamButton'
import useStyles from './styles'
import { IHamburguerMenuProps } from './types'

export default function HamburguerMenu({
  open,
  anchorEl,
  handleClose,
  teamPage,
}: IHamburguerMenuProps) {
  const { togglePageTheme } = useMUITheme()
  const { menuItemContainer } = useStyles()

  return (
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
  )
}
