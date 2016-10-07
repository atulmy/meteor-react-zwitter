// Frontend
// imports / ui / components / tweet_list.jsx

import React from 'react';

const Tweet = ({tweet}) => (
    <div>
        <fieldset>
            <legend>{ tweet._id }</legend>

            <p>{ tweet.tweet }</p>
            <p>{ tweet.createdAt.toString() }</p>
        </fieldset>

        <br/>
    </div>
);


class TweetList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTweets() {
        let tweetsHtml;

        if (this.props.tweetsLoaded) {
            tweetsHtml = (
                this.props.tweets.map((tweet) => (
                    <Tweet key={ tweet._id } tweet={ tweet }/>
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
        let tweetsHtml;



        return (
            <div>
                <h2>Tweets</h2>

                { this.renderTweets() }
            </div>
        )
    }
};

TweetList.propTypes = {
    tweetsLoaded: React.PropTypes.bool,
    tweets: React.PropTypes.array
};

export default TweetList;