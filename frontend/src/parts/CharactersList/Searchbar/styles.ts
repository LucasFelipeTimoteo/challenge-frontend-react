import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  searchbarWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },

  searchbarInputWrapper: {
    width: 'min(640px, 80%)',
  },
  
  searchbarInnerInput: {
    borderRadius: '5px 0 0 20px'
  },

  searchbarButton: {
    borderRadius: '5px 20px 5px 0',
    right: 4,
    background: palette.primary.main,

    '&:hover' : {
      background: palette.primary.main,
    }
  }
}))

export default useStyles