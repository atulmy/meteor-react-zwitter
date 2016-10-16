// Imports
// Libraries
import React from 'react';
import ReactHelmet from 'react-helmet';
import moment from 'moment';

// Tweets Component
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
                            { moment(tweet.createdAt).fromNow() }
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
                <ReactHelmet
                    title="Tweets - Zwitter"
                />

                <h2>Tweets</h2>

                { this.renderTweets() }
            </section>
        )
    }
}

// Properties
Tweets.propTypes = {
    tweetsLoaded: React.PropTypes.bool,
    tweets: React.PropTypes.array
};

export default Tweets;