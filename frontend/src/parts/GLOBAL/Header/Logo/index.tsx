import React from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'
import logo from '../../../../assets/SVGs/logo.svg'

export default function Logo() {
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.md}px)`)

  if (!query) {
    return null
  }

  return (
    <>
      {query && (
        <img
          src={logo}
          width="68px"
          height="77px"
          alt="Logo"
          title="Ironman face icon"
        />
      )}
    </>
  )
}
