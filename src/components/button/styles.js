import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    margin:"0px",
    display: "inline-flex",
    paddingRight:"0px",
    alignItems:"center",
    justifyContent:"center",
    flexWrap: "wrap",
   
  },
  card: {
    height: "100%",
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  },
  cardMedia: {
    paddingTop: "56.25%" ,
  },
  cardContent: {
    flexGrow: 1
  }
}));
