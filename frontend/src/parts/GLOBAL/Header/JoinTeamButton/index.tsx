import React from 'react'
import { People } from '@material-ui/icons'
import {
  Button,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import useStyles from './styles'
import { useHistory } from 'react-router'

type JoinTeamButtonProps = {
  teamPage?: boolean
}

export default function JoinTeamButton({ teamPage }: JoinTeamButtonProps) {
  const { breakpoints } = useTheme()
  const query = useMediaQuery(`(min-width:${breakpoints.values.sm}px)`)
  const { push } = useHistory()
  const { joinTeamButton } = useStyles()

  const goToTeamPage = () => {
    push('/team')
  }

  if (teamPage) {
    return null
  }

  return (
    <Button
      variant="contained"
      color="primary"
      className={joinTeamButton}
      endIcon={<People />}
      title="Go to your selected characters page"
      onClick={goToTeamPage}
    >
      <Typography
        variant={query ? 'h6' : 'body2'}
        component="p"
      >
        Your Team
      </Typography>
    </Button>
  )
}
