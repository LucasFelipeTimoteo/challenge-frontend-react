import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

export default function Footer() {
  const { footerWrapper, footerLInk } = useStyles()

  return (
    <footer className={footerWrapper}>
      <Typography variant="subtitle1" component="p">
        Data provided by Marvel. © 2021 MARVEL
      </Typography>

      <Typography>
        Developed by <a
          className={footerLInk}
          href="https://github.com/LucasFelipeTimoteo"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Felipe
        </a>
      </Typography>
    </footer>
  )
}
