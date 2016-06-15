import React from 'react';
import Restaurant from './Restaurant';

class Restaurants extends React.Component {

  render() {
    const restaurants = this.props.restaurants;

    return (
       <div className="restaurants">
         <ul>
            {restaurants.map( (item, key) => {
              return <Restaurant key={key} restaurant={item} />;
            })}
         </ul>
       </div>
    )
  }
}

export default Restaurants;
