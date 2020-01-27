const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ALL_GAMES':
      return action.payload
    case 'NEW_GAME':
      return [...state, action.payload]
    case 'UPDATE_GAME':
      return state.map(game => game.id === action.payload.id ? action.payload : game)
    default:
      return state
  }
}