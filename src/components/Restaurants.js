import React from 'react';
import Restaurant from './Restaurant';
import { Link } from 'react-router';
import {GridList, GridTile} from 'material-ui/lib/grid-list';
import IconButton from 'material-ui/lib/icon-button';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    padding: 8,
    // width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
    fontFamily: 'Roboto'
  },
};

class Restaurants extends React.Component {
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
    const restaurants = this.state.restaurants;

    return(
      <div style={styles.root}>
        <GridList
          cols={5}
          cellHeight={200}
          style={styles.gridList}
        >
          {restaurants.map((restaurant) => {
            console.log(restaurant);
            return (<GridTile
              key={restaurant.id}
              title={restaurant.name}
              subtitle={<span>in <b>{restaurant.address.city}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={restaurant.photos[0].s3URL} />
            </GridTile>)
          })}
        </GridList>
      </div>)
  }
}

export default Restaurants;
