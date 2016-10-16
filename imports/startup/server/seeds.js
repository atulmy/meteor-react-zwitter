// Imports
// Libraries
import { Accounts } from 'meteor/accounts-base';

// App
import { Tweet } from '../../api/tweets/collection';

let userId = '';

// User
if(Meteor.users.find().count() == 0) {
    let user = { username: 'jonsnow', password: '123456'  };

    userId = Accounts.createUser(user);
}

// Tweets
if(Tweet.find().count() == 0) {
    let tweets = [
        { tweet: 'Tremble wihtout honor, and we won’t capture a lieutenant commander.', userId, createdAt: new Date() },

        { tweet: 'Crazy, galactic emitters never yearn a ship-wide, cloudy vogon.', userId, createdAt: new Date() },

        { tweet: 'Cum guttus mori, omnes caculaes dignus barbatus, talis abactores.', userId, createdAt: new Date() }
    ];

    tweets.forEach((tweet) => {
        Tweet.insert(tweet);
    });
}
