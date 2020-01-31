import React, { Component } from "react";
import GameDetailPage from "./GameDetailPage";
import { connect } from "react-redux";
import { joinGame } from "../../actions";
import ChessboardContainer from "../board/ChessboardContainer";

class GameDetailPageContainer extends Component {
  joinHandle = (id, color) => {
    this.props.dispatch(joinGame(this.props.user.jwt, id, color));
  };
  render() {
    return (
      <div>
        <GameDetailPage
          pageID={this.props.match.params.id}
          games={this.props.games}
          onClick={this.joinHandle}
          user={this.props.user}
        />
        <ChessboardContainer gameID={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.listOfGames,
  user: state.currentUser
});

export default connect(mapStateToProps)(GameDetailPageContainer);
