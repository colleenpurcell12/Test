import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">

                <header className="main-header">
                    <h1><Link to="/"> GitHub Search </Link></h1>
                    <h4>by Colleen Purcell</h4> 
                </header>

                <main className="main-content">
                    {this.props.children}
                </main>
                
            </div>
        );
    }
};

export default App;
