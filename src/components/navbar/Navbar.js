import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/"> Homepage</Link>
      {!props.user.username && <Link to="/login"> Login</Link>}
      {props.user.username && <div className='logout' onClick={props.onClick}><Link to='/'>Logout</Link></div>}
      {props.user.username && <p className='navbar-username'>Logged in as:{props.user.username}</p>}
    </div >
  );
}

export default Navbar;