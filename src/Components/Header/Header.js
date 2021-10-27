import React from "react";
import * as classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <h1>ClipIt</h1>
      <button
        onClick={() => {
          console.log("Clicked!!!!");
          props.initLogin();
        }}
      >
        {props.isAuth ? "Logout" : "Sign in"}
      </button>
    </div>
  );
};
export default Header;
