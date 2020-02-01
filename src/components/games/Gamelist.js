import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import playerAssigner from "../../playerAssigner";
import { useStyles } from "./styles";
import image from "../../images/fon1.jpg";
import Bking from "../../images/King_black.png";
import Wking from "../../images/King_white.png";

export default function Gamelist(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h2">
          List of games
        </Typography>
        <Grid container spacing={3}>
          {props.games &&
            props.games
              .sort((a, b) => a.id - b.id)
              .map(game => (
                <Grid item key={game.id} xs={4}>
                  <Link
                    to={`/game/${game.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        image={image}
                        title="chess"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h3">
                          Game number: {game.id}
                        </Typography>
                        <div>
                          <img
                            className={classes.icon}
                            src={Wking}
                            alt="White king"
                          />
                          <Typography
                            className={classes.crown}
                            gutterBottom
                            variant="h5"
                            component="h3"
                          >
                            {playerAssigner(game)["white"]}
                          </Typography>
                          <img
                            className={classes.icon}
                            src={Bking}
                            alt="Black king"
                          />
                          <Typography
                            className={classes.crown}
                            gutterBottom
                            variant="h5"
                            component="h3"
                          >
                            {playerAssigner(game)["black"]}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
