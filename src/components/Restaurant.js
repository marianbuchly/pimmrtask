import React from 'react';

class Restaurant extends React.Component {

  render() {
    const restaurant = this.props.restaurant;
    return(
      <li>
        { restaurant.name }
      </li>
    );
  }
}

export default Restaurant;
