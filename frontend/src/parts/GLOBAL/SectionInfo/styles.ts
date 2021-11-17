import { makeStyles } from "@material-ui/core";
import { symmetricSideMarginStyleVar } from "../../../styles/globalStyleVariables";

const useStyles = makeStyles(({ breakpoints }) => ({
  sectionInfoContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 35,
    margin: `34px ${symmetricSideMarginStyleVar}`,

    [breakpoints.down(breakpoints.values.md)]: {
      flexDirection: 'column',
      gap: 10
    }
  },

  conditionalSectionInfoCharacterPage: {
    margin: `100px ${symmetricSideMarginStyleVar} 34px`
  },

  loadMoredataSwitchLabel: {
    margin: 0,

    [breakpoints.down(breakpoints.values.md)]: {
      order: 1
    }
  }
}))

export default useStyles