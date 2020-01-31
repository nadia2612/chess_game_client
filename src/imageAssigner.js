import Pieces from "./components/Pieces";

export default function ImageAssigner(type, color) {
  switch (color) {
    case "white": {
      switch (type) {
        case "Pawn":
          return Pieces.whitePawn;
        case "Bishop":
          return Pieces.whiteBishop;
        case "Knight":
          return Pieces.whiteKnight;
        case "Rook":
          return Pieces.whiteRook;
        case "Queen":
          return Pieces.whiteQueen;
        case "King":
          return Pieces.whiteKing;
      }
    }
    case "black": {
      switch (type) {
        case "Pawn":
          return Pieces.blackPawn;
        case "Bishop":
          return Pieces.blackBishop;
        case "Knight":
          return Pieces.blackKnight;
        case "Rook":
          return Pieces.blackRook;
        case "Queen":
          return Pieces.blackQueen;
        case "King":
          return Pieces.blackKing;
      }
    }
    default:
      return;
  }
}
