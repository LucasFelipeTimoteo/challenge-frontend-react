import { makeStyles } from "@material-ui/core";
import { cardStyleVars } from "../../../themes/globalStyleVariables";

const useStyles = makeStyles({
  charactersCardsSection: {
    display: 'grid',
    justifyItems: 'center',
    width: 'min(1326px, 100%)',
  },

  charactersCardsWrapper: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, ${cardStyleVars.cardWidth}px)`,
    justifyContent: 'center',
    gap: 30,
    justifyItems: 'center',
  }
})

export default useStyles