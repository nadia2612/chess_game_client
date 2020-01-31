import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useStyles } from "./styles";
import SvgIcon from "@material-ui/core/SvgIcon";


function HomeIcon(props) {
  return (
    <SvgIcon {...props} style={{ color: "white" }}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Navbar(props) {
  const classes = useStyles();

  return (
    <div className="navbar">
      <Link to="/" className={classes.homeButton}>
        {" "}
        <HomeIcon color="primary" fontSize="large" />
      </Link>
      {!props.user.username && (
        <Link style={{ color: "white" }} className="logoin" to="/login">
          {" "}
          LOGIN
        </Link>
      )}
      {props.user.username && (
        <div className="logout" onClick={props.onClick}>
          <Link to="/" style={{ color: "white" }}>LOGOUT</Link>
        </div>
      )}
      {props.user.username && (
        <p className="navbar-username" style={{ color: "white" }}>Logged in as: {props.user.username}</p>
      )}
    </div>
  );
}

export default Navbar;
