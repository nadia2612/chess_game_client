import { makeStyles } from "@material-ui/core/styles";
import Image from "../../images/Wood-werzalit-square.jpg"
export const useStyles = makeStyles(theme => ({
  footer: {
    backgroundImage: `url(${Image})`,

    // backgroundColor:  "#3f51b5",
    padding: theme.spacing(1),
    color: "white"
  }
}));