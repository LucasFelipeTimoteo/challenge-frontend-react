import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../styles/globalStyleVariables";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  appBar: {
    height: 125
  },

  headerContainer: {
    background: palette.secondary.main,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'whitesmoke',
    borderBottom: '0.1px solid rgb(18,18,18)',
    padding: `0 ${symmetricSideMarginStyleVar}`,
    height: '100%',

    [breakpoints.down(breakpoints.values.sm)]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },

  headerButtonsContainer: {
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  }
}))

export default useStyles