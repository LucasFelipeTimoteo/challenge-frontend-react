import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  photoViwer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    minHeight: 70,
    marginTop: 'auto',
    background: `linear-gradient(transparent 3px, ${palette.background.paper} 27px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 6,
    textTransform: 'uppercase',
    textDecoration: 'none',
    paddingBottom: 10,
    zIndex: 2,
    color: 'gray',
    textShadow: '0 0 1px white'
  }
}))

export default useStyles