import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "0px",
  marginBottom: "0px"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1,
    textDecoration: "none",
    marginBottom: "0px"
  },
  media: {
    height: 240,
    margin: "3%",
    marginBottom: "0px"
  },
  crown: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "0px"
  }
}));
