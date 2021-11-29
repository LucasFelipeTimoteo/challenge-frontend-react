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

  horizontalCardMedia: {
    minWidth: 'clamp(134px, 24vw, 200px)',
    minHeight: 'clamp(132.9px, 24vw, 188.09px)',
    borderRadius: '50%',
    marginLeft: 'clamp(6px, 3.7vw, 50px)',
    zIndex: 3,

    [breakpoints.down(breakpoints.values.md)]: {
      transform: 'translateY(-30px)'
    },

    [breakpoints.down(breakpoints.values.sm)]: {
      clipPath: 'circle(0%)',
      transition: '0.55s ease-in-out',
      borderColor: 'transparent',
      position: 'absolute',
      minHeight: '100%',
      minWidth: '100%',
      margin: 0,
      borderRadius: 0,
    },
  },

  focusedHorizontalCardMedia: {
    [breakpoints.down(breakpoints.values.sm)]: {
      clipPath: 'circle(100%)',
    },
  },

  conditionalComicHorizontalCardMedia: {
    minHeight: '100%',
    minWidth: 265,
    borderRadius: 0,
    marginLeft: 0,

    [breakpoints.down(breakpoints.values.md)]: {
      minHeight: '24vw',
      minWidth: '20vw',
      margin: '65px 0 0 20px',
      alignSelf: 'flex-start',
      borderRadius: '10px',
    },

    [breakpoints.down(breakpoints.values.sm)]: {
      position: 'absolute',
      minHeight: '100%',
      minWidth: '100%',
      margin: 0,
      borderRadius: 0,
      zIndex: 1
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

  horizontalCardDescription: {
    paddingBottom: 50,
    marginRight: 8
  },

  conditionalComicHorizontalCardInfo: {
    gap: 8
  }
}))

export default useStyles