// Frontend
// imports / ui / components / tweet_list.jsx

// Imports

// Libraries
import React from 'react';

// App
import * as TweetMethods from '../../api/tweets/methods';

// Tweet Component
class Tweet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tweet: '',
            error: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('E - submit #form-tweet');

        let input = {};
        input.tweet = this.state.tweet;
        console.log(input);

        if(input.tweet != '') {
            TweetMethods.add.call(input, (error, response) => {
                console.log('M - tweet.add / callback');

                if(error) {
                    this.setState({ error: error.reason });
                } else {
                    if(response.success) {
                        this.context.router.push('/');
                    }
                }
            });
        } else {
            this.setState({ error: 'Tweet cannot be empty.' });
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <section>
                <h2>Tweet to the world</h2>

                { this.state.error ? <p>{ this.state.error }</p> : '' }

                <form id="form-tweet" onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            id="tweet"
                            name="tweet"
                            value={ this.state.tweet }
                            placeholder="What's happening?"
                            onChange={ this.onChange.bind(this) }
                        />
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </section>
        )
    }
}

// Contexts
Tweet.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default Tweet;