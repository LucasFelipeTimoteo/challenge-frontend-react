import { makeStyles } from "@material-ui/core";
import { CreateCSSProperties, PropsFunc } from "@material-ui/styles";
import { CSSProperties } from "react";
import { cardStyleVars } from "../../../themes/globalStyleVariables";

type IStylesObjectJSS = CSSProperties | CreateCSSProperties<{}> | PropsFunc<{}, CreateCSSProperties<{}>>

const cardFavoriteOrDisfavorButtonSharedStyles: IStylesObjectJSS = {
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

    [breakpoints.down(breakpoints.values.xs)]: {
      width: `calc(${cardStyleVars.cardWidth}px - 16px)`
    }
  },
  
  cardMedia: {
    height: '50%',
    width: 'auto'
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
    overflow: 'hidden',
    textAlign: 'left'
  },

  cardTitle: {
    fontWeight: 600,
  }
}))

export default useStyles