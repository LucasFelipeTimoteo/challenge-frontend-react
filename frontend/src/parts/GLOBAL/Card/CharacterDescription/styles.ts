import { makeStyles } from "@material-ui/core";
import { cardScrollbarStyleObjectVar } from "../../../../styles/globalStyleVariables";

const useStyles = makeStyles(({ palette }) => ({
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
}))

export default useStyles