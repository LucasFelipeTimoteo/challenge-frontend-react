import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../themes/globalStyleVariables";

const useStyles = makeStyles({
  charactersListContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: `0 min(2vw, ${symmetricSideMarginStyleVar}) 0`,
  },

  conditionalTeamPageCharactersListContainer: {
    transform: 'translateY(-220px)'
  }
})

export default useStyles