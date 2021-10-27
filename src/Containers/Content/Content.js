import React from "react";
import StoredText from "../../Components/Header/StoredText/StoredText";
import * as classes from "./Content.module.css";
import oopsImage from "./oops.jpg";

const Content = (props) => {
  return (
    <div className={classes.Content}>
      {!props.isAuth ? (
        <div className={classes.Error}>
          <img src={oopsImage} />
          <p>Login to start saving your texts</p>
        </div>
      ) : null}
      {props.isAuth ? (
        <>
          <h2>Your clips</h2>
          <div className={classes.Clips}>
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
            <StoredText />
          </div>
        </>
      ) : null}
    </div>
  );
};
export default Content;
