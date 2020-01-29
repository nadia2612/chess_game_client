import { LOGGED_IN, LOG_OUT } from "../actions";

const initialState = {
  username: "",
  email: "",
  jwt: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      const { username, email, jwt } = action.payload;
      return { username, email, jwt };
    case LOG_OUT:
      return { username: "", email: "", jwt: "" };
    default:
      return state;
  }
}
