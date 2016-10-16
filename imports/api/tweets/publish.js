// Imports
// Libraries
import { Meteor } from 'meteor/meteor';

// App
import { Tweet } from './collection';

// All Tweets
Meteor.publish('tweets', () => {
    return Tweet.find({}, { sort: { createdAt: -1 } });
});
