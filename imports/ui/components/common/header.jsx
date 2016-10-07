// Frontend
// imports / ui / components / header.jsx

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends React.Component {

    logout() {
        return () => {
            Meteor.logout();

            this.context.router.push('/');
        }
    }

    renderHeaderLinks() {
        let headerLinksHtml;

        if (this.props.user && typeof this.props.user._id != 'undefined') {
            headerLinksHtml = (
                <div>
                    <li><Link to="/tweet">Tweet</Link></li>

                    <li><a href="#" onClick={ this.logout() }>Logout</a></li>
                </div>
            )
        } else {
            headerLinksHtml = (
                <div>
                    <li><Link to="/login">Login</Link></li>

                    <li><Link to="/register">Register</Link></li>
                </div>
            )
        }

        return headerLinksHtml;
    }

    render() {
        return (
            <header>
                <h1>Zwitter</h1>

                <ul>
                    <li><Link to="/">Home</Link></li>

                    { this.renderHeaderLinks() }
                </ul>
            </header>
        )
    }
}

Header.propTypes = {
    user: React.PropTypes.object
};

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const HeaderContainer = createContainer(() => {
    return {
        user:  Meteor.user() ? Meteor.user() : {}
    };
}, Header);

export default HeaderContainer;