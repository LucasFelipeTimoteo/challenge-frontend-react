import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  toggleThemeButton: {
    fontSize: '3rem',
    color: 'whitesmoke',

    [breakpoints.down(breakpoints.values.md)]: {
      fontSize: '2.5rem'
    }
  }
}))

export default useStyles