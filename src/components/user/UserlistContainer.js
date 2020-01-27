import React, { Component } from 'react';
import Userlist from './Userlist'
import { connect } from 'react-redux'
import { getAllUsers } from '../actions'

class UserlistContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers())
  }
  render() {
    return (
      <div className="userlist-container">
        <Userlist users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.listOfUsers
})

export default connect(mapStateToProps)(UserlistContainer);