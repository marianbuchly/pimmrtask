import React from 'react';
import RaisedButton from 'material-ui/lib';
import FontIcon from 'material-ui/lib';
import {fullWhite} from 'material-ui/lib/styles/colors'

class Controls extends React.Component {

  render() {
    return(

      <div>
        <RaisedButton onClick={this.plusOne.bind(this)} />
        <RaisedButton onClick={this.plusOne.bind(this)} />
      </div>
    );
  }
}

export default Controls;
