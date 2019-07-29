import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class AuthPage extends Component {
    render() {
        return (
            <main>
                <form action="#" className="center">
                    <h1>Hi<i className="fas fa-hand-paper"></i>, I`m Swimming pool manager. </h1>
                    <h2>Please, fill in the appropriate fields for further work with me. </h2>
                    <label><input type="text" id="login" placeholder="Login" required /></label>
                    <label><input type="text" id="pass" placeholder="Password" required /></label>
                    <button type="submit" className="button">
                        <NavLink to="/userInterface">Sing in</NavLink>
                    </button>
                </form>
            </main>

        )
    }
}
