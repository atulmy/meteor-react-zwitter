// Imports
// Libraries
import React from 'react';
import ReactHelmet from 'react-helmet';

// Tweet Component
class Tweet extends React.Component {

    render() {
        return (
            <section>
                <ReactHelmet
                    title="About - Zwitter"
                />

                <h2>About</h2>

                <p>Github Repo: <a href="https://github.com/atulmy/meteor-reactjs-zwitter">https://github.com/atulmy/meteor-reactjs-zwitter</a></p>

                <p>Demo: <a href="http://meteor-reactjs-zwitter.demo.atulmy.com/">http://meteor-reactjs-zwitter.demo.atulmy.com</a></p>
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