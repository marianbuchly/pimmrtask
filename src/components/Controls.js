import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib';
import {fullWhite} from 'material-ui/lib/styles/colors'

const style = {
margin: 12,
};

class Controls extends React.Component {
  nextPage() {

  }

  prevPage() {

}
  render() {
    return(

      <div>
        <RaisedButton onClick={this.prevPage.bind(this)} label="Prev" secondary={true} style={style} />
        <RaisedButton onClick={this.nextPage.bind(this)} label="Next" secondary={true} style={style} />
      </div>


    );
  }
}

export default Controls;
