import { NOT_YOUR_MOVE, CORRECT_MOVE, INVALID_MOVE, CHECK } from '../actions'

const initialState = {
  notYourMove: '',
  invalidMove: '',
  isCheck: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case NOT_YOUR_MOVE:
      return {
        ...state,
        notYourMove: 'It is not your move!'
      }
    case CORRECT_MOVE:
      return initialState
    case INVALID_MOVE:
      return {
        ...state,
        invalidMove: 'This is an invalid move with this piece'
      }
    case CHECK:
      return {
        ...state,
        isCheck: 'CHECK!'
      }
    default:
      return state
  }
}