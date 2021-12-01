import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  hamburguerMenuIcon: {
    marginLeft: 'auto',
    color: 'whitesmoke',

    [breakpoints.down(breakpoints.values.sm)]: {
      marginLeft: 0
    }
  },
}))

export default useStyles