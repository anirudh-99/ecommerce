import React, { useState } from "react";
import Layout from "../../components/layout/layout";

import classes from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth.action";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <form className={classes.Form} onSubmit={userLogin}>
        <label>Email</label>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        ></input>
        <br />
        <label>Password</label>
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        ></input>
        <br />
        <button>Login</button>
      </form>
    </Layout>
  );
}
