import React from 'react';

class Restaurants extends React.Component {

  render() {
       const { restaurants } = this.props.data;
    return (
       <div className="restaurants">
         <Navigation />
         <ul>
            {restaurants.map( (item, key) => {
              return <Restaurant key={key} restaurant={item} />;
            })}
         </ul>
         <Navigation />
       </div>
    );
  }
}

export default Restaurants;