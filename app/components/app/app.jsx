import React from 'react';
//import './app.css';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.displayName = 'App';
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-header app">
            <h1>Hello, world!</h1>
            <small>This is a webpack-react-redux-boilerplate app.</small>
          </div>
        </div>
      </div>
    );
  }
}
