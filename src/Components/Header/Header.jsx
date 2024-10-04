import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink className="btn btn-primary" to="/">
          Home
        </NavLink>
        <NavLink className="btn btn-primary mx-2" to="/login">
          Login
        </NavLink>
        <NavLink className="btn btn-primary mx-2" to="Learn-hook">
          LearnHook
        </NavLink>
        <NavLink className="btn btn-primary mx-2" to="redux-hook">
          Redux-toolkit
        </NavLink>
        <NavLink className="btn btn-primary mx-2" to="game-xuc-xac">
          GameXucXac
        </NavLink>
      </div>
    );
  }
}
