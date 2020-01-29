  
import { SAVE_USERS } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_USERS:
      return action.payload
    default:
      return state
  }
}