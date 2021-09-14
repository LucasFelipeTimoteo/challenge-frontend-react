import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../../themes/globalStyleVariables";

const useStyles = makeStyles({
  sectionInfoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `34px ${symmetricSideMarginStyleVar}`
  },

  conditionalSectionInfoCharacterPage: {
    margin: `100px ${symmetricSideMarginStyleVar} 34px`
  }
})

export default useStyles