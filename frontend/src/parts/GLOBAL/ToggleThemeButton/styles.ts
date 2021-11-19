import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  toggleThemeButton: {
    fontSize: '3rem',
    color: 'whitesmoke',
    
    [breakpoints.down(breakpoints.values.md)]: {
      fontSize: '2.5rem',
      color: palette.primary.main
    },
  },
  
  toggleThemeButtonWrapper: {
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
  },
}))

export default useStyles