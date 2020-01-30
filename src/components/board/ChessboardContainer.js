import React, { Component } from "react";
import Chessboard from "./Chessboard";
import { connect } from "react-redux";
import imageAssigner from "../../imageAssigner";
import { makeMove } from "../../actions";

class ChessboardContainer extends Component {
  state = {
    board: Array(8).fill(
      Array(8).fill({
        imgsrc: null,
        type: null,
        color: null,
        coordinate_X: null,
        coordinate_Y: null,
        figureId: null
      })
    ),
    hasSelected: false,
    selectedPiece: {
      type: null,
      color: null,
      coordinate_X: null,
      coordinate_Y: null,
      figureId: null
    },
    whoseTurnIsIt: ""
  };
  componentDidMount() {
    this.updateBoard();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.updateBoard();
    }
  }
  updateBoard() {
    const game = this.props.games.find(
      game => game.id === parseInt(this.props.gameID)
    );
    const newBoard = this.state.board.map((row, rowIndex) =>
      row.map((square, squareIndex) => {
        return {
          imgsrc: null,
          type: null,
          color: null,
          coordinate_X: squareIndex,
          coordinate_Y: rowIndex,
          figureId: null
        };
      })
    );
    if (game && game.users) {
      if (game.users.length > 0) {
        const whoseTurnIsIt = game.users.find(
          user => user.id === game.currentTurn
        );
        if (whoseTurnIsIt) {
          this.setState({ whoseTurnIsIt: whoseTurnIsIt.name });
        }
      }
      if (game.figures) {
        game.figures.forEach(figure => {
          newBoard[figure["coordinate_Y"]][figure["coordinate_X"]] = {
            imgsrc: imageAssigner(figure["kind"], figure["color"]),
            type: figure["kind"],
            color: figure["color"],
            coordinate_X: figure["coordinate_X"],
            coordinate_Y: figure["coordinate_Y"],
            figureId: figure["id"]
          };
        });
      }
    }
    newBoard.reverse();
    this.setState({
      board: newBoard
    });
  }
  onClick = piece => {
    if (this.props.user.jwt) {
      console.log("clicked!", piece);
      console.log("hasbeenselected", this.state.hasSelected);
      if (!this.state.hasSelected && piece["type"] !== null) {
        this.setState({
          hasSelected: true,
          selectedPiece: {
            type: piece["type"],
            color: piece["color"],
            coordinate_X: piece["coordinate_X"],
            coordinate_Y: piece["coordinate_Y"],
            figureId: piece["figureId"]
          }
        });
      } else if (this.state.hasSelected) {
        const newBoard = this.state.board.map(row => [...row]);
        newBoard[this.state.selectedPiece.coordinate_Y][
          this.state.selectedPiece.coordinate_X
        ]["imgsrc"] = null;
        this.setState({
          hasSelected: false,
          board: newBoard
        });
        this.props.dispatch(
          makeMove(
            this.state.selectedPiece.figureId,
            piece.coordinate_X,
            piece.coordinate_Y,
            parseInt(this.props.gameID),
            this.props.user.jwt
          )
        );
      }
    }
  };
  render() {
    return (
      <div>
        <Chessboard
          board={this.state.board}
          onClick={this.onClick}
          errors={this.props.errors}
          whoseTurnIsIt={this.state.whoseTurnIsIt}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.listOfGames,
  user: state.currentUser,
  errors: state.errors
});

export default connect(mapStateToProps)(ChessboardContainer);
