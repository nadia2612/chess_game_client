import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import playerAssigner from '../../playerAssigner'
import {useStyles} from "./styles"


export default function Gamelist(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h2">
          List of games
        </Typography>
        <Grid container spacing={4}>
          {props.games && props.games.map(game => (
            <Grid item key={game.name} xs={12} sm={6} md={4}>
              <Link to={`/game/${game.id}`}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Game number: {game.id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      White player: {playerAssigner(game)['white']}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Black player: {playerAssigner(game)['black']}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment >
  );
}