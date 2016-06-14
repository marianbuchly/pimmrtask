import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors'

class Controls extends React.Component {

  render() {
    <div className="buttonleft">
      <FlatButton
        icon={<ActionAndroid />}
        style={style}
    </div>
    <div>
      <FlatButton className="buttonright"
        icon={<ActionAndroid />}
        style={style}
    </div>

    return(

    )
  }
}

export default Controls;
