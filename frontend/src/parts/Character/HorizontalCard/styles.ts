import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  horizontalCardContainer: {
    position: 'relative',
    height: 300,
    width: 'min(1170px, 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    minWidth: 'clamp(134px, 20vw, 200px)',
    minHeight: 'clamp(132.9px, 20vw, 188.09px)',
    borderRadius: '50%',
    marginLeft: 'clamp(6px, 3.7vw, 50px)',

    [breakpoints.down(breakpoints.values.sm)]: {
      clipPath: 'circle(0%)',
      transition: '0.55s ease-in-out',
      borderColor: 'transparent',
      position: 'absolute',
      minHeight: '100%',
      minWidth: '100%',
      margin: 0,
      borderRadius: 0,
      zIndex: 1
    },    
  },

  conditionalCardImageFocusedHorizontalCardMedia: {
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
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 min(70px, 5.3vw) 0 0',
    padding: 0,
    gap: 'clamp(1px, 2vw, 20px)',

    [breakpoints.down(breakpoints.values.md)]: {
      margin: '30px 20px 2px'
    }
  },

  conditionalComicHorizontalCardInfo: {
    gap: 8
  },

  comicInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 'clamp(9px, 1.4vw, 25px)',
    width: '100%',

    [breakpoints.down(breakpoints.values.sm)]: {
      flexDirection: 'column',
      gap: 1
    }
  },

  comicDateInfo: {
    display: 'flex',
    gap: 6
  },

  comicDateIcon: {
    fontSize: '1.1rem'
  },

  comicPagesInfo: {
    display: 'flex',
    gap: 6
  },

  comicPagesIcon: {
    fontSize: '1.1rem'
  },

  comicPriceInfo: {
    display: 'flex',
    gap: 6
  },

  comicPriceIcon: {
    fontSize: '1.1rem'
  },


  photoViwer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 6,
    textTransform: 'uppercase',
    textDecoration: 'none',
    paddingBottom: 10,
    zIndex: 2,
    color: 'gray',
    textShadow :'0 0 1px white'
  }
}))

export default useStyles