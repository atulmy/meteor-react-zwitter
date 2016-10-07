// Frontend
// imports / ui / components / tweet_list.jsx

import React from 'react';

class Tweet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tweet: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('E - submit #form-tweet');
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

export default Tweet;