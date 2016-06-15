import React from 'react';
import Navigation from './components/Navigation';
import Restaurants from './components/Restaurants';
import jQuery from 'jquery';
import ReactDOM from 'react-dom';
import Utils from './lib/Utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    this.fetchRestaurants()
  }

  fetchRestaurants() {
    const city = 'Amsterdam';
    const start = 0;
    const limit = 5;

    fetch('https://api.pimmr.me', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [city, start, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then((json) => {
        this.setState({ restaurants: json.result })
    })
    .catch(err => console.error(err));
  }

  render() {
      return (
        <div>
          <Navigation />
          <Restaurants restaurants={this.state.restaurants} />
        </div>
      );
  }
}

export default App;
