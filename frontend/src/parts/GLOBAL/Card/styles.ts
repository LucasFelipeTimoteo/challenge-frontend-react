import { makeStyles } from "@material-ui/core";
import { cardScrollbarStyleObjectVar, cardStyleVars } from "../../../themes/globalStyleVariables";
import { StylesObjectJSS } from "./types";

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

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  cardWrapper: {
    height: cardStyleVars.cardHeight,
    width: cardStyleVars.cardWidth,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px 30px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    [breakpoints.down(breakpoints.values.xs)]: {
      width: `calc(${cardStyleVars.cardWidth}px - 16px)`
    }
  },

  cardMedia: {
    minHeight: '50%',
    width: 'auto'
  },

  cardMediaOverlay: {
    opacity: 0,
    width: '100%',
    height: '100%',
    color: 'white',

    '&:hover': {
      opacity: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#1a1a1ab9',
      cursor: 'pointer'
    }
  },

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

  textContentWrapper: {
    textAlign: 'left',
    cursor: 'pointer',
    height: '100%'
  },

  cardTitle: {
    fontWeight: 600,
    width: '90%'
  },

  cardDescriptionFullSizeMode: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: palette.background.paper,
    zIndex: 1,
    padding: '16px 16px 80px',
    transition: 'background 0.7s',
    overflow: 'auto',

    ...cardScrollbarStyleObjectVar
  },

  readMoreGradientWrapper: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    minHeight: 50,
    marginTop: 'auto',
    width: '100%',
    background: `linear-gradient(transparent 3px, ${palette.background.paper} 27px)`,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  readMoreText: {
    fontWeight: 700,
    color: 'gray',
    textShadow: '0 0 1px white',
    textTransform: 'uppercase',
  }
}))

export default useStyles