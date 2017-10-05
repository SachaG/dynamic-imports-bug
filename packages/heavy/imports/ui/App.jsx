import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// App component - represents the whole app
class App extends Component {

  render() {

    /*

    Uncommenting the following lines should not add to the bundle size, 
    but it does

    */
    // import('./HeavyComponent.jsx').then((MyComponent) => {
    //   console.log('HeavyComponent imported!')
    // });

    return (
      <div className="container">
        <h1>Dynamic Imports Example</h1>
      </div>
    );
  }
}

export default App;
