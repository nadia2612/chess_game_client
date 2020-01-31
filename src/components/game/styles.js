import Image from "../../images/Wood-werzalit-square.jpg"
import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button:{
    backgroundImage: `url(${Image})`,

  }
}));