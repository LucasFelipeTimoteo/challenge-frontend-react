import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  loadMoredataSwitchLabel: {
    margin: 0,

    [breakpoints.down(breakpoints.values.md)]: {
      order: 1
    }
  }
}))

export default useStyles