import React from 'react'
import classes from './header.module.css';

import {NavLink} from 'react-router-dom';

export default function header() {
    return (
        <div class={classes.Navbar}>
            <NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
            <NavLink to="/signup" activeClassName={classes.active}>Signup</NavLink>
            <NavLink to="/login" activeClassName={classes.active}>Login</NavLink>
        </div>
    );
}
