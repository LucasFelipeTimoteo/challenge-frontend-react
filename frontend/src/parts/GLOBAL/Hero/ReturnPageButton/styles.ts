import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../../../styles/globalStyleVariables";

const useStyles = makeStyles({
  returnToPreviousPageButtonWrapper: {
    position: 'absolute',
    top: 10,
    right: symmetricSideMarginStyleVar,
    display: 'flex',
    gap: 5,
    color: '#FFCDD2',
    fontWeight: 700,
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.08)'
    }
  },
})

export default useStyles