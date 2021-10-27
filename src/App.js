import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Content from "./Containers/Content/Content";
import Auth from "./Components/Auth/Auth";

const App = () => {
  const [state, setState] = useState({
    showAuthComp: false,
    isAuth: false,
  });

  const initLogin = () => {
    setState({ ...state, showAuthComp: true });
  };

  return (
    <div className="App">
      <Header isAuth={state.isAuth} initLogin={initLogin} />
      <Auth show={state.showAuthComp} />
      <Content isAuth={!state.isAuth} />
    </div>
  );
};

export default App;
