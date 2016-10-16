// Imports
// Libraries
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

// Header Component
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
            // User is logged in

            headerLinksHtml = (
                <ul className="nav nav-pills">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About</Link></li>

                    <li><Link to="/tweet">Tweet</Link></li>

                    <li><a href="#" onClick={ this.logout() }>Logout</a></li>
                </ul>
            )
        } else {
            // User is not logged in

            headerLinksHtml = (
                <ul className="nav nav-pills">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About</Link></li>

                    <li><Link to="/login">Login</Link></li>

                    <li><Link to="/register">Register</Link></li>
                </ul>
            )
        }

        return headerLinksHtml;
    }

    render() {
        return (
            <header>
                <h1>Zwitter</h1>

                { this.renderHeaderLinks() }
            </header>
        )
    }
}

// Properties
Header.propTypes = {
    user: React.PropTypes.object
};

// Contexts
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Header Container
const HeaderContainer = createContainer(() => {
    return {
        user:  Meteor.user() ? Meteor.user() : {}
    };
}, Header);

// Finally, export the Container
export default HeaderContainer;