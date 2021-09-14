import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../../themes/globalStyleVariables";

const useStyles = makeStyles({
  characterDataContainer: {
    display: 'grid',
    justifyItems: 'center',
    margin: `0 ${symmetricSideMarginStyleVar} 118px`,
    gap: 35
  }
})

export default useStyles