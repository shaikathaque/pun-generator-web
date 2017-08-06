import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './NextPun.css';

var NextPun = (props) => (
  <div className="nextPun">
    <RaisedButton label="Next Pun"
      onTouchTap={() => props.handleNextPunClick()}
      primary={true}
    />
  </div>
)

export default NextPun;