import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import gamelistReducer from './gamelistReducer'
import userlistReducer from './userlistReducer'

export default combineReducers({
  currentUser: loginReducer,
  listOfGames: gamelistReducer,
 listOfUsers: userlistReducer,
})