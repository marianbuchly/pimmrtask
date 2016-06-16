import React from 'react';
import Controls from './Controls';

class Restaurant extends React.Component {

  render() {
    const restaurant = this.props.restaurant;
    return(
      <li>
        <div>
          { restaurant.name }
          { restaurant.address.city }

          </div>
      </li>


    );
  }
}

export default Restaurant;
