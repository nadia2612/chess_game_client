import request from "superagent";

const baseUrl = "http://localhost:4000";

export const LOGGED_IN = "LOGGED_IN";

function saveJWT(username, email, jwt) {
  return {
    type: LOGGED_IN,
    payload: { username, email, jwt }
  };
}

export const sendLogin = (username, email, password, push) => dispatch => {
  const data = { name: username, email, password };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(response.body.name, email, response.body.jwt));
      if (push) {
        push("/");
      }
    })
    .catch(console.error);
};

export const signUp = (username, email, password, push) => () => {
  const data = { name: username, email, password };
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      if (push) {
        push("/");
      }
    })
    .catch(console.error);
};

export const LOG_OUT = "LOG_OUT";

export const logOut = () => ({
  type: LOG_OUT
});


export const SAVE_GAMES = 'SAVE_GAMES'

function saveGames(games) {
  return {
    type: SAVE_GAMES,
    payload: games
  }
}

export const getAllGames = () => dispatch => {
  request
    .get(`${baseUrl}/game`)
    .then(response => {
      dispatch(saveGames(response.body))
    })
    .catch(console.error)
}

export const createGame = (username, push) => dispatch => {
  const data = { name: username }
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then(response => {
      dispatch(getAllGames())
      if (push) {
        push('/')
      }
    })
}

export const SAVE_USERS = 'SAVE_USERS'

function saveUsers(users) {
  return {
    type: SAVE_USERS,
    payload: users
  }
}

export const getAllUsers = () => dispatch => {
  request
    .get(`${baseUrl}/user`)
    .then(response => {
      const users = response.body.map(user => ({ id: user.id, name: user.name }))
      dispatch(saveUsers(users))
    })
    .catch(console.error)
}