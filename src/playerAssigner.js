export default function PlayerAssigner(game) {
  let playerWhite
  let playerBlack
  if (!game.users) {
    playerWhite = null
    playerBlack = null
  } else if (game.users.length === 0) {
    playerWhite = null
    playerBlack = null
  } else if (game.users.length === 1) {
    if (game.users[0].player.color === 'white') {
      playerWhite = game.users[0].name
      playerBlack = null
    } else {
      playerWhite = null
      playerBlack = game.users[0].name
    }
  } else {
    if (game.users[0].player.color === 'white') {
      playerWhite = game.users[0].name
      playerBlack = game.users[1].name
    } else {
      playerWhite = game.users[1].name
      playerBlack = game.users[0].name
    }
  }
  return {
    white: playerWhite,
    black: playerBlack
  }
}