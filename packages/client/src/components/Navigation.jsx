import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/" exact className="nav-button" activeStyle={{ backgroundColor: "#960018" }}>REGION</NavLink>
      </div>
    );
  }
}

export default connect(null)(Navigation);
