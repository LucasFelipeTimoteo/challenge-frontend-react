import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  joinTeamButton: {
    background: palette.primary.main,
    borderRadius: '5px 20px',
    height: 'clamp(40px, 5.8vw, 54px)',
    width: 'clamp(166px, 21.8vw, 179px)',
    padding: 1,
  }
}))

export default useStyles