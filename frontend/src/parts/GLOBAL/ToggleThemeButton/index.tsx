import { IconButton } from '@material-ui/core'
import { Brightness4, Brightness7 } from '@material-ui/icons'
import React from 'react'
import { useMUITheme } from '../../../styles/themes/MUITheme'
import useStyles from './styles'

export default function ToggleThemeButton() {
  const { pageTheme, togglePageTheme } = useMUITheme()
  const { toggleThemeButton, toggleThemeButtonWrapper } = useStyles()

  return (
    <IconButton className={toggleThemeButtonWrapper} onClick={togglePageTheme}>
      {
        pageTheme === "light"
          ?
          <Brightness4
            titleAccess="Toggle to dark theme"
            role="button"
            className={toggleThemeButton}
          />
          :
          <Brightness7
            titleAccess="Toggle to light theme"
            role="button"
            className={toggleThemeButton}
          />
      }
    </IconButton>
  )
}
