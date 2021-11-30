import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardMedia: {
    minHeight: '50%',
    width: 'auto'
  },

  cardMediaOverlay: {
    opacity: 0,
    width: '100%',
    height: '100%',
    color: 'white',

    '&:hover': {
      opacity: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#1a1a1ab9',
      cursor: 'pointer'
    }
  },
})

export default useStyles