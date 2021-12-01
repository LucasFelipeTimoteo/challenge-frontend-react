import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({breakpoints}) => ({
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

  comicPageHorizontalCardMedia: {
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
}))

export default useStyles