import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({breakpoints}) => ({
  sectionTitle: {
    fontWeight: 700,
    marginRight: 'auto',

    [breakpoints.down(breakpoints.values.md)]: {
      marginRight: 0
    }
  }
}))

export default useStyles