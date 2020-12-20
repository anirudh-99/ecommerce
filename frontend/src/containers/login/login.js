import React from "react";
import Layout from "../../components/layout/layout";

import classes from "./login.module.css";

export default function login() {
  return (
    <Layout>
      <form className={classes.Form}>
        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter email"></input>
        <br />
        <label>Password</label>
        <br />
        <input type="password" placeholder="Enter password"></input>
        <br />
        <button>Login</button>
      </form>
    </Layout>
  );
}
