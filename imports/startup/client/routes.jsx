// Frontend
// imports / startup / client / routes.jsx

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from '../../ui/components/app';
import TweetListContainer from '../../ui/containers/tweet_list';
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';

const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ TweetListContainer } />
            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />
        </Route>
    </Router>
);

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});