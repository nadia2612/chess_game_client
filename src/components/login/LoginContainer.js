import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { sendLogin } from '../../actions'

class LoginContainer extends Component {
  state = {
    username:'',
    email:'',
    password: ''
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.dispatch(sendLogin(this.state.username,this.state.email, this.state.password, this.props.history.push))
    this.setState({ username:'',email:'',password: '' })
  }
  render() {
    return (
      <>
        <Login onChange={this.onChange} onSubmit={this.onSubmit} />
      </>
    );
  }
}


export default connect()(LoginContainer);