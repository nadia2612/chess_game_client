import React from "react";
import "./styles.css";

function Chessboard(props) {
  return (
    <div className="chessboard">
      <br />
      {props.whoseTurnIsIt && <h3>It's {props.whoseTurnIsIt}'s turn</h3>}
      {props.errors.notYourMove && props.errors.notYourMove}
      {props.errors.invalidMove && props.errors.invalidMove}
      {props.errors.isCheck && <h1>{props.errors.isCheck}</h1>}
      <div className="board">
        {props.board.map((row, indexRow) => {
          return (
           
            <div  key={indexRow} className="chessboard-row">
              {row.map((square, indexColumn) =>
                (indexRow + indexColumn) % 2 === 1 ? (
                  <div
                    key={indexRow * 8 + indexColumn}
                    className="square-black"
                    onClick={() => props.onClick(square)}
                  >
                    {square.imgsrc && (
                      <img
                        key={indexRow * 8 + indexColumn + 100}
                        className="piece-img"
                        src={square.imgsrc}
                        alt="square"
                      />
                    )}
                  </div>
                ) : (
                  <div
                    key={indexRow * 8 + indexColumn}
                    className="square-white"
                    onClick={() => props.onClick(square)}
                  >
                    {square.imgsrc && (
                      <img
                        key={indexRow * 8 + indexColumn + 100}
                        className="piece-img"
                        src={square.imgsrc}
                        alt="square"
                      />
                    )}
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chessboard;
