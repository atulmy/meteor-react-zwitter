// Imports
// Libraries
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App
import { Tweet } from '../../api/tweets/collection';
import Tweets from './tweets';

// Tweets Container
const TweetsContainer = createContainer(() => {
    const tweetsHandle = Meteor.subscribe('tweets');
    const tweetsLoaded = tweetsHandle.ready();
    const tweets = Tweet.find().fetch();

    return {
        tweetsLoaded,
        tweets
    };
}, Tweets);

// Finally, export the Container
export default TweetsContainer;