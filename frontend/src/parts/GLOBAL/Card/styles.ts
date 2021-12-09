import { makeStyles } from "@material-ui/core";
import { cardStyleVars } from "../../../styles/globalStyleVariables";

const useStyles = makeStyles(({ breakpoints }) => ({
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
  }
}))

export default useStyles