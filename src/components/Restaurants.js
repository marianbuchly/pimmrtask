import React from 'react';
import Restaurant from './Restaurant';
import {GridList, GridTile} from 'material-ui/lib/grid-list';
import IconButton from 'material-ui/lib';
import Subheader from 'material-ui/lib/menu';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import { Link } from 'react-router';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 500,
//     height: 500,
//     overflowY: 'auto',
//     marginBottom: 24,
//   },
// };
//
// const tilesData = [
//   {
//     img: '',
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//
// ];
//
// const GridListExampleSimple = () => (
//   <div style={styles.root}>
//     <GridList
//       cellHeight={200}
//       style={styles.gridList}
//     >
//       <Subheader>December</Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           subtitle={<span>by <b>{tile.author}</b></span>}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//         >
//           <img src={tile.img} />
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
// );


class Restaurants extends React.Component {

  render() {
    const restaurants = this.props.restaurants;

    return (
       <div className="restaurants">
         <ul>
            {restaurants.map( (item, key) => {
              return <Restaurant key={key} restaurant={item} />;
              // <li key ={restaurant.id}>
              // //  <Restaurant Link to={'/restaurant'}>{restaurant.name} />;
              //  <Link to={'/restaurant'}><Restaurant key={key} restaurant={item} /></Link>;
              //  <Link to={'/restaurant/${restaurant.id}'}>{restaurant.name}</Link>;
            })}
         </ul>
          {this.props.children}
       </div>
    )
  }
}

export default Restaurants;
