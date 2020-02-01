import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import assignPlayers from "../../playerAssigner";
import { useStyles } from "./styles";
import Bking from "../../images/King_black.png";
import Wking from "../../images/King_white.png";

function checkIfThereIsAPlayer(game, color) {
  if (game.users) {
    if (game.users.length > 0) {
      if (game.users.length > 1) {
        return true;
      } else {
        if (game.users[0]["player"]["color"] === color) {
          return true;
        }
      }
    }
  }
  return false;
}

function GameDetailPage(props) {
  const classes = useStyles();
  return (
    <>
      {props.games.reduce((acc, game) => {
        if (game.id === parseInt(props.pageID)) {
          acc = (
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Hello this is game number {game.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                <img
                            className={classes.icon}
                            src={Wking}
                            alt="White king"
                          />
                  {assignPlayers(game)["white"]}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                <img
                            className={classes.icon}
                            src={Bking}
                            alt="Black king"
                          />
                  {assignPlayers(game)["black"]}
                </Typography>
              </CardContent>
              {!checkIfThereIsAPlayer(game, "white") && props.user.jwt && (
                <CardActions>
                  <Button
                    className={classes.button}
                    size="small"
                    color="primary"
                    onClick={() => props.onClick(game.id, "white")}
                  >
                    Join as white
                  </Button>
                </CardActions>
              )}
              {!checkIfThereIsAPlayer(game, "black") && props.user.jwt && (
                <CardActions>
                  <Button
                 className={classes.button}
                    size="small"
                    color="primary"
                    onClick={() => props.onClick(game.id, "black")}
                  >
                    Join as black
                  </Button>
                </CardActions>
              )}
            </Card>
          );
        }
        return acc;
      }, 0)}
    </>
  );
}

export default GameDetailPage;
