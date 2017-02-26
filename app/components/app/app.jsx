import React from 'react';
import './app.css';

export default class App extends React.Component {
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
