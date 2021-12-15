import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import Logo from '../Logo'
import { IPageLogoProps } from './types'

export default function PageLogo({ query }: IPageLogoProps) {
  const { headerMainInformationLink, title } = useStyles()

  return (
    <Link
      to="/"
      title="Click to go to homepage"
      className={headerMainInformationLink}
      data-testid="pageLogo"
    >
      {query && <Logo />}

      <Typography variant="h1" className={title}>
        Marvel Strike Team
      </Typography>
    </Link>
  )
}
