import request from "superagent";

const baseUrl = "http://localhost:4000";

export const LOGGED_IN = "LOGGED_IN";

function saveJWT(email, jwt) {
  return {
    type: LOGGED_IN,
    payload: { email, jwt }
  };
}

export const sendLogin = (email, password, push) => dispatch => {
  const data = { email, password };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(email, response.body.jwt));
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
