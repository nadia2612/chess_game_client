import React, { Component } from "react";
import { connect } from "react-redux";
import GamelistContainer from "../games/GamelistContainer";
import { createGame } from "../../actions";
import CreateGameButton from "../button/CreateGameButton";
import "./styles.css"

class Homepage extends Component {
  onClick = () => {
    this.props.dispatch(
      createGame(this.props.user.username, this.props.history.push)
    );
  };
  render() {
    return (
      <>
        
          <h1>Let's play chess!</h1>
          {this.props.user.username && (
          <CreateGameButton onClick={this.onClick} />
        )}
          <GamelistContainer />
       
        
       </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});

export default connect(mapStateToProps)(Homepage);
