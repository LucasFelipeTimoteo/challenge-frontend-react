import { makeStyles } from "@material-ui/core";
import wallpaper from '../../assets/images/wallpaper.avif'
import { symmetricSideMarginStyleVar } from "../../themes/globalStyleVariables";

export const useStyles = makeStyles({
  HeroContainer: {
    height: '76vh',
    backgroundImage: `url(${wallpaper})`,
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  
  teamPageConditionalHeroContainer: {
    paddingBottom: 160
  },

  heroContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    textAlign: 'center',
    margin: `30px ${symmetricSideMarginStyleVar} 0`,
  },

  characterConditionalHeroContentContainer: {
    justifyContent: 'flex-end',
    height: '105%',
    marginTop: 120
  },

  returnToPreviousPageButtonWrapper: {
    position: 'absolute',
    top: 10,
    right: symmetricSideMarginStyleVar,
    display: 'flex',
    gap: 5,
    color: '#FFCDD2',
    fontWeight: 700,
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.08)'
    }
  },

  heroText: {
    marginBottom: 'clamp(25px, 5vw, 50px)',
    color: 'whitesmoke',
    fontWeight: 700,
    width: '70%',
    textAlign: 'left'
  }
})