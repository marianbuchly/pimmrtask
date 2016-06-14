import React from 'react';
import Navigation from './components/Navigation';
import Restaurants from './components/Restaurants';
import jQuery from 'jquery';
import ReactDOM from 'react-dom';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';

var $ = require ('jquery')

class App extends React.Component {
    render() {
        return (
            <div className="container">
              <Navigation />
                <h1>Pimmr App</h1>

            </div>
        );
    }
}

export default App;


// const restaurants = document.getElementById('restaurants');
// const city = 'Amsterdam';
// const start = 0;
// const limit = 5;
