import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  photoViwer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
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
})

export default useStyles