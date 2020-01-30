import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {useStyles} from "./styles"
export default function CreateGameButton(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.onClick}
            >
              Create New Game
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
