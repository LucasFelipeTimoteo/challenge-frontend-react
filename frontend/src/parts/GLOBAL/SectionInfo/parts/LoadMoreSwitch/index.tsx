import { FormControlLabel, Switch } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { ILoadMoreSwitchProps } from './types'

export default function LoadMoreSwitch({
  loadMoreData,
  toggleLoadMoreData
}: ILoadMoreSwitchProps) {
  const { loadMoredataSwitchLabel } = useStyles()

  return (
    <FormControlLabel
      className={loadMoredataSwitchLabel}
      label="Load more"
      title={`Click to ${loadMoreData ? 'disable' : 'activate'} more data load`}
      control={
        <Switch
          size="medium"
          color="primary"
          name="load more"
          checked={loadMoreData}
          onChange={toggleLoadMoreData}
        />
      }
    />
  )
}
