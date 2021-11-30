import { makeStyles } from "@material-ui/core";
import { cardScrollbarStyleObjectVar, cardStyleVars } from "../../../styles/globalStyleVariables";

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

  textContentWrapper: {
    textAlign: 'left',
    cursor: 'pointer',
    height: '100%'
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