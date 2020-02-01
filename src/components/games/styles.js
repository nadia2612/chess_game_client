import { makeStyles } from "@material-ui/core/styles";
import Image from "../../images/Wood-werzalit-square.jpg"

export const useStyles = makeStyles(theme => ({
  cardGrid: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  card: {
    height: "95%",
    display: "flex",
    flexWrap:"wrap",
    flexDirection: "column",
    paddingBottom: "0px",
    marginBottom: "0px",
    backgroundColor: "#d7c3aa"
    // backgroundImage: `url(${Image})`,
  },
  cardMedia: {
    paddingTop: "46.25%"
  },
  cardContent: {
    flexGrow: 1,
    textDecoration: "none",
    marginBottom: "0px"
  },
  media: {
    height: 200,
    margin: "3%",
    marginBottom: "0px",
  },
  crown: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "0px"
  },
  icon: {
    width: "35px"
  }
}));
