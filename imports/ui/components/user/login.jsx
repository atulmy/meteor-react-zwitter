// Frontend
// imports / ui / components / user / login.jsx

import React from 'react';

import * as UserMethods from '../../../api/users/methods';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('E - submit #form-login');

        if(this.state.username != '' && this.state.password != '') {
            Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {

                console.log(error);

                if(!error) {
                    // Router.go('tweet');
                }
            });
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <form id="form-login" onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <label htmlFor="user-username">Username</label>

                        <input
                            type="text"
                            className="form-control"
                            id="user-username"
                            name="username"
                            placeholder="Eg: jonsnow"
                            value={ this.state.username }
                            onChange={ this.onChange.bind(this) }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user-password">Password</label>

                        <input
                            type="password"
                            className="form-control"
                            id="user-password"
                            name="password"
                            placeholder="Password"
                            value={ this.state.password }
                            onChange={ this.onChange.bind(this) }
                        />
                    </div>

                    <button type="submit" className="btn btn-default">Login</button>
                </form>
            </div>
        )
    }
}

export default UserLogin;