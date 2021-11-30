import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  readMoreGradientWrapper: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    minHeight: 50,
    marginTop: 'auto',
    width: '100%',
    background: `linear-gradient(transparent 3px, ${palette.background.paper} 27px)`,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  readMoreText: {
    fontWeight: 700,
    color: 'gray',
    textShadow: '0 0 1px white',
    textTransform: 'uppercase',
  }
}))

export default useStyles