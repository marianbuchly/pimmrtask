import React from 'react';
import Navigation from './components/Navigation';
import Restaurants from './components/Restaurants';
import jQuery from 'jquery';
// import './css/main.css';
import ReactDOM from 'react-dom';
import Utils from './lib/Utils';



class App extends React.Component {
  render() {
      return (
        <div>
          <Navigation />
          {this.props.children}
        </div>
      );
  }
}

export default App;
