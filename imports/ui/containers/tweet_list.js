// Frontend
// imports / ui / components / tweet_list.jsx

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tweet } from '../../api/tweets/collection';
import TweetList from '../components/tweet_list';

export default TweetListContainer = createContainer(() => {
    const tweetsHandle = Meteor.subscribe('tweets');
    const tweetsLoaded = tweetsHandle.ready();
    const tweets = Tweet.find().fetch();

    return {
        tweetsLoaded,
        tweets
    };
}, TweetList);