import React, { Component } from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { logOut } from '../../actions'

class NavbarContainer extends Component {
  onClick = () => {
    
    this.props.dispatch(logOut())
  }
  render() {
    return (
      <>
        <Navbar user={this.props.user} onClick={this.onClick} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(NavbarContainer);