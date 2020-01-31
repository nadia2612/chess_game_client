import Image from "../../images/Wood-werzalit-square.jpg"
import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  cardGrid: {
    backgroundColor:"#ece7e3",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    marginBottom:"0px",
    paddingBottom:"0px",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ece7e3'
  },
  cardMedia: {
    paddingTop: '56.25%', 
  },
  cardContent: {
    flexGrow: 1,
  },
  button:{
    backgroundImage: `url(${Image})`,
  },
  board:{
    backgroundColor:"#ece7e3",

  },icon: {
    width: "40px"
  }
}));