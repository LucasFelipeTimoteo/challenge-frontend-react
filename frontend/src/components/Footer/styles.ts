import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../themes/globalStyleVariables";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  footerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 50,
    padding: `0 ${symmetricSideMarginStyleVar}`,
    background: palette.secondary.main,
    color: 'whitesmoke',
    height: 82,
    marginTop: 30,

    [breakpoints.down(breakpoints.values.md)]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      gap: 0
    }
  },

  footerLInk: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bolder',

    '&:hover, &:focus': {
      textDecoration: 'underline',
    }
  }
}))

export default useStyles