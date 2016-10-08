// Frontend
// imports / ui / layouts / app.jsx

// Imports

// Libraries
import React from 'react';

// App
import Header from '../components/common/header';
import Footer from '../components/common/footer';

// App (Layout) Component
class App extends React.Component {
    render() {
        return (
            <div className="container">
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