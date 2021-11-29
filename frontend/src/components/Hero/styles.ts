import { makeStyles } from "@material-ui/core";
import wallpaper from '../../assets/images/wallpaper.avif'
import { symmetricSideMarginStyleVar } from "../../styles/globalStyleVariables";

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
  
  teamPageHeroContainer: {
    paddingBottom: 160
  },

  heroContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    textAlign: 'center',
    margin: `30px ${symmetricSideMarginStyleVar} 0`,
  },

  characterPageHeroContentContainer: {
    justifyContent: 'flex-end',
    height: '105%',
    marginTop: 120
  },

  heroText: {
    marginBottom: 'clamp(25px, 5vw, 50px)',
    color: 'whitesmoke',
    fontWeight: 700,
    width: '70%',
    textAlign: 'left'
  }
})