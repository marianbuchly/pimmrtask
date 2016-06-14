import React from 'react';
import Navigation from './Navigation';

class Restaurant extends React.Component {

  render() {
    const restaurant = this.props.restaurant;
    return(
      <div className="restaurant">
         <Navigation />
            <li>
                
                { restaurant.name.map( (item, key) => {
                  return <city key={key} city={item} />;
                })}
            </li>
        <Navigation />
      </div>

    );
  }
}

export default Restaurant;
