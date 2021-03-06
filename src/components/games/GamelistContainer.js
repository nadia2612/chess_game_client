import React, { Component } from 'react';
import Gamelist from './Gamelist'
import { connect } from 'react-redux'
import { joinGame} from '../../actions'

class GamelistContainer extends Component {
  joinHandle = (id, color) => {
    this.props.dispatch(joinGame(this.props.user.jwt, id, color))
  }
  render() {
    return (
      <>
        <Gamelist games={this.props.games} onClick={this.joinHandle} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.listOfGames,
  user: state.currentUser
})

export default connect(mapStateToProps)(GamelistContainer);