import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './SubmitPun.css';


var SubmitPun = (props) => {
  return (
    <div className="submitPun">
      <h2>Submit your own pun</h2>
      <TextField
        hintText="Question"
        floatingLabelText="Question"
        floatingLabelFixed={true}
        fullWidth={true}
        value={props.userQuestionState}
        onChange={(e) => props.handleUserQuestionChange(e.target.value)}
      />
      <br />
      <br />
      <TextField
        hintText="Answer"
        floatingLabelText="Answer"
        floatingLabelFixed={true}
        fullWidth={true}
        value={props.userAnswerState}
        onChange={(e) => props.handleUserAnswerChange(e.target.value)}
      />
      <br />
      <br />
      <FlatButton label="Submit Pun"
        primary={true}
        fullWidth={true}
        onTouchTap={() => props.handleSubmitPunClick()}
      />
    </div>
  )
}

export default SubmitPun;