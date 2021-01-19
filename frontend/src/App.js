import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./containers/home/home";
import Login from "./containers/login/login";
import Signup from "./containers/signup/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "./components/hoc/privateRoutes";
import { isUserLoggedIn } from "./actions/auth.action";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.autheticate) dispatch(isUserLoggedIn());
  }, [auth.autheticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home}></PrivateRoute>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
