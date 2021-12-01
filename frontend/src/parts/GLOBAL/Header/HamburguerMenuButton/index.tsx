import { IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles'
import { IHamburguerMenuButtonProps } from './types'

export default function HamburguerMenuButton({
  handleMenu,
  open
}: IHamburguerMenuButtonProps) {
  const { hamburguerMenuIcon } = useStyles()

  return (
    <IconButton
      onClick={handleMenu}
      className={hamburguerMenuIcon}
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  )
}
