// Frontend
// imports / ui / components / header.jsx

import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <header>
                <h1>Zwitter</h1>

                <Link to="/">Home</Link>

                &nbsp; &bull; &nbsp;

                <Link to="/login">Login</Link>

                &nbsp; &bull; &nbsp;

                <Link to="/register">Register</Link>
            </header>
        )
    }
}

export default Header;