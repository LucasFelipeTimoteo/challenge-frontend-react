import { IconButton, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles'

export default function Searchbar() {
  const {
    searchbarWrapper,
    searchbarInputWrapper,
    searchbarButton,
    searchbarInnerInput
  } = useStyles()

  return (
    <div className={searchbarWrapper}>
      <TextField
        variant="outlined"
        color="primary"
        placeholder="Search for a character"
        title="Type a character name, words or letters here to search for it"
        InputProps={{ className: searchbarInnerInput }}
        className={searchbarInputWrapper}
      />

      <IconButton
        aria-label="search"
        className={searchbarButton}
      >
        <Search titleAccess="Click to start search" />
      </IconButton>
    </div>
  )
}
