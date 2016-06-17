import React from 'react';
import CSS from './main.module.css';
import Controls from './Controls';

class Restaurant extends React.Component {

  render() {
    const restaurant = this.props.restaurant;
    return(
      <li>
        <div>
          { restaurant.id }
          { restaurant.name }
          { restaurant.address.city }
          { restaurant.cuisines }

          </div>
      </li>


    );
  }
}

export default Restaurant;
