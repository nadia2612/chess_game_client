import request from 'superagent'

// const baseUrl = 'https://glacial-stream-52474.herokuapp.com'

const baseUrl = 'http://localhost:4000'

export const LOGGED_IN = 'LOGGED_IN'

function saveJWT(username,email, jwt) {
  return {
    type: LOGGED_IN,
    payload: { username, email, jwt }
  }
}

export const sendLogin = (username,email, password, push) => dispatch => {
  const data = { name: username,email, password }
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(response.body.name, email, response.body.jwt))
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}

export const signUp = (username,email, password, push) => () => {
  const data = { name: username, email,password }
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      if (push) {
        push('/')
      }
    })
    .catch(console.error)
}
export const LOG_OUT = 'LOG_OUT'

export const logOut = () => ({
  type: LOG_OUT
})

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

export const joinGame = (jwt, gameId, color, push) => dispatch => {
  const data = { jwt, gameId, color }
  request
    .post(`${baseUrl}/join`)
    .send(data)
    .then(response => {
      console.log(response.body)
      if (push) {
        push('/')
      }
    })
}

export const ALL_PLAYERS = 'ALL_PLAYERS'

const saveAllPlayers = data => ({
  type: ALL_PLAYERS,
  payload: data
})

export const fetchAllPlayers = () => dispatch => {
  request
    .get(`${baseUrl}/player`)
    .then(response => {
      dispatch(saveAllPlayers(response.body))
    })
}

export const makeMove = (figureId, coordinate_X, coordinate_Y, gameId, jwt) => dispatch => {
  const data = { figureId, coordinate_X, coordinate_Y, gameId, jwt }
  request
    .put(`${baseUrl}/move`)
    .send(data)
    .then(response => {
      console.log(response)
      dispatch(correctMove())
    })
    .catch(error => {
      console.log(error.status)
      switch (error.status) {
        case 400:
          dispatch(notYourMove())
          break
        case 401:
          console.log('INVALID MOVE!!!!')
          dispatch(invalidMove())
          break
        case 402:
          console.log('CHECK!!!!')
          dispatch(check())
          break
      }
      console.error(error)
    })
}



export const NOT_YOUR_MOVE = 'NOT_YOUR_MOVE'

export const notYourMove = () => ({
  type: NOT_YOUR_MOVE
})

export const CORRECT_MOVE = 'CORRECT_MOVE'

export const correctMove = () => ({
  type: CORRECT_MOVE
})

export const INVALID_MOVE = 'INVALID_MOVE'

export const invalidMove = () => ({
  type: INVALID_MOVE
})

export const CHECK = 'CHECK'

export const check = () => ({
  type: CHECK
})