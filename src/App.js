import React from "react";
import { Switch, Route } from "react-router-dom";
import GameDetailPageContainer from "./components/game/GameDetailPageContainer";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Footer from "./components/footer/Footer";
import Homepage from "./components/Homepage";
import { connect } from "react-redux";
import "./App.css";
class App extends React.Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);
  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      this.props.dispatch(action);
    };
  }
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/game/:id" component={GameDetailPageContainer} />
          <Route component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
