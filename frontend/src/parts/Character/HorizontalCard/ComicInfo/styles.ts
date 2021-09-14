import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
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
}))

export default useStyles