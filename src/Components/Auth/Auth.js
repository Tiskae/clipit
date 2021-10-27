import React, { useState } from "react";
import * as classes from "./Auth.module.css";

const Auth = (props) => {
  const [state, setState] = useState({
    action: "sign_up",
  });

  const switchAction = () => {
    setState({
      ...state,
      action: state.action === "sign_up" ? "sign_in" : "sign_up",
    });
  };

  const signUpContent = (
    <div className={classes.Content}>
      <h2>Sign up an account</h2>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Sign up</button>
      </form>
      <p className={classes.AlreadyMember}>
        Already have an account? :
        <button onClick={switchAction}>Login in</button>
      </p>
    </div>
  );

  const signInContent = (
    <div className={classes.Content}>
      <h2>Login to your account</h2>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Sign in</button>
      </form>
      <p className={classes.AlreadyMember}>
        Don't have an account yet? :
        <button onClick={switchAction}>Sign up</button>
      </p>
    </div>
  );

  return props.show ? (
    <div className={classes.Auth}>
      {state.action === "sign_up" ? signUpContent : null}
      {state.action === "sign_in" ? signInContent : null}
    </div>
  ) : null;
};

export default Auth;
