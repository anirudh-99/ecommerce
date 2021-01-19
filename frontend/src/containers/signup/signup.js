import React, { useState } from "react";
import Layout from "../../components/layout/layout";

import classes from "../login/login.module.css";

export default function signup() {
  

  return (
    <Layout>
      <form className={classes.Form}>
        <label>Name</label>
        <br />
        <input type="text" placeholder="Enter Name"></input>
        <br />
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
