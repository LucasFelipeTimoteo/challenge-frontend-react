import { makeStyles } from "@material-ui/core";
import { StylesObjectJSS } from "../types";

const cardFavoriteOrDisfavorButtonSharedStyles: StylesObjectJSS = {
  width: 54,
  height: '54.02px',
  position: 'absolute',
  right: 5,
  top: 'calc(50% - 26px)',
  zIndex: 1,
  filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))',

  '&:hover': {
    filter: 'drop-shadow(0 6.5px 4px rgba(0, 0, 0, 0.25))',
    transform: 'scale(1.1, 1.1)'
  }
}

const useStyles = makeStyles(({palette}) => ({
  addFavoritesButton: {
    ...cardFavoriteOrDisfavorButtonSharedStyles,
    background: 'whitesmoke',
    color: '#212121',

    '&:hover': {
      background: 'white',
    }
  },

  disfavorButton: {
    ...cardFavoriteOrDisfavorButtonSharedStyles,
    background: palette.primary.main,

    '&:hover': {
      background: palette.primary.main,
    }
  },
}))

export default useStyles