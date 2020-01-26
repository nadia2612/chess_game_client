import { LOGGED_IN, LOG_OUT } from '../actions'

const initialState = {
 
  email:'',
  jwt: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      const { email, jwt } = action.payload
      return { email, jwt }
    case LOG_OUT:
      return {  email:'',jwt: '' }
    default:
      return state
  }
}