// Frontend
// imports / ui / components / tweet_list.jsx

import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tweet } from '../../api/tweets/collection';

class Tweets extends React.Component {

    renderTweets() {
        let tweetsHtml;

        if (this.props.tweetsLoaded) {
            tweetsHtml = (
                this.props.tweets.map((tweet) => (
                    <div className="panel panel-default" key={ tweet._id }>
                        <div className="panel-body">
                            { tweet.tweet }
                        </div>

                        <div className="panel-footer">
                            { tweet.createdAt.toString() }
                        </div>
                    </div>
                ))
            )
        } else {
            tweetsHtml = (
                <p>Please wait...</p>
            )
        }

        return tweetsHtml;
    }

    render() {
        return (
            <section>
                <h2>Tweets</h2>

                { this.renderTweets() }
            </section>
        )
    }
}

Tweets.propTypes = {
    tweetsLoaded: React.PropTypes.bool,
    tweets: React.PropTypes.array
};

const TweetsContainer = createContainer(() => {
    const tweetsHandle = Meteor.subscribe('tweets');
    const tweetsLoaded = tweetsHandle.ready();
    const tweets = Tweet.find().fetch();

    return {
        tweetsLoaded,
        tweets
    };
}, Tweets);

export default TweetsContainer;