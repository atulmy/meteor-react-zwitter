// Backend
// imports / api / tweets / publish.js

import { Meteor } from 'meteor/meteor';

import { Tweet } from './collection';

// All Tweets
Meteor.publish('tweets', () => {
    return Tweet.find({}, { sort: { createdAt: -1 } });
});
