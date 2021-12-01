import { makeStyles } from "@material-ui/core";

import { cardScrollbarStyleObjectVar } from '../../../styles/globalStyleVariables'

const useStyles = makeStyles(({ breakpoints }) => ({
  horizontalCardContainer: {
    position: 'relative',
    height: 300,
    width: 'min(1170px, 100%)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px 50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    gap: 'clamp(1px, 3vw, 50px)',

    [breakpoints.down(breakpoints.values.sm)]: {
      height: 400,
      alignItems: 'flex-start',
      marginTop: 40,
    }
  },

  horizontalCardInfo: {
    position: 'relative',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 0 60px',
    gap: 'clamp(1px, 2vw, 20px)',
    height: '100%',
    overflow: 'auto',
    margin: '40px 20px 2px',

    ...cardScrollbarStyleObjectVar,

    [breakpoints.down(breakpoints.values.md)]: {
      margin: '0 min(70px, 5.3vw) 0 20px',
    }
  },

  comicHorizontalCardInfo: {
    gap: 8
  }
}))

export default useStyles