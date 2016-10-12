// Frontend
// imports / startup / server / routes.jsx

import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import ReactHelmet from 'react-helmet';

import AppRoutes from '../common/routes';

Meteor.startup(function () {
    ReactRouterSSR.Run(AppRoutes, {}, {
        htmlHook(html) {
            const head = ReactHelmet.rewind();
            return html.replace('<head>', '<head>' + head.title + head.base + head.meta + head.link + head.script);
        }
    });
});