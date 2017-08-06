import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

import './NextPun.css';

injectTapEventPlugin();

var NextPun = (props) => (
  <div className="nextPun">
    <RaisedButton label="Next Pun"
      onTouchTap={() => props.handleNextPunClick()}
      primary={true}
    />
  </div>
)

export default NextPun;

//<button onClick={() => props.handleNextPunClick()}>Next Pun</button>

// <div className="nextPun">
//       <FlatButton fullWidth={true} />
//     </div>