// Backend
// imports / startup / server / seeds.js

import { Tweet } from '../../api/tweets/collection';

// Tweets
if(Tweet.find().count() == 0) {
    let tweets = [
        { tweet: 'Tremble wihtout honor, and we won’t capture a lieutenant commander.', userId: 'a', createdAt: new Date() },

        { tweet: 'Crazy, galactic emitters never yearn a ship-wide, cloudy vogon.', userId: 'a', createdAt: new Date() },

        { tweet: 'Cum guttus mori, omnes caculaes dignus barbatus, talis abactores.', userId: 'a', createdAt: new Date() }
    ];

    tweets.forEach((tweet) => {
        Tweet.insert(tweet);
    });
}
