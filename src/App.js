import React from 'react';
import Navigation from './Navigation';
import './stylesheets/components.scss';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';



class App extends React.Component {
    render() {
        return (
            <h1>Pimmr App</h1>
        );
    }
}

export default App;


// const restaurants = document.getElementById('restaurants');
// const city = 'Amsterdam';
// const start = 0;
// const limit = 5;
