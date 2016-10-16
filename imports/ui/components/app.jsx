// Imports
// Libraries
import React from 'react';
import ReactHelmet from 'react-helmet';

// App
import Header from '../components/common/header';
import Footer from '../components/common/footer';

// App (Layout) Component
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ReactHelmet
                    title="Zwitter"
                    meta={[
                        { "name": "description", "content": "Meteor + ReactJS Boilerplate App - Zwitter (Basic clone of Twitter)" },
                        { "property": "og:type", "content": "website" }
                    ]}
                />

                <Header />

                <hr />

                { this.props.children }

                <hr />

                <Footer />
            </div>
        );
    }
}

// Finally, export the Component
export default App;