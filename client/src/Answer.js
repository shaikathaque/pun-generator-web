import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import './Answer.css';

var Answer = (props) => {

  const actions = [
    <FlatButton
      label="Lol"
      primary={true}
      onTouchTap={props.handleCloseDialog}
    />
  ];

  return (
    <div className="answer">
      <p onClick={() => props.handleShowAnswerClick()}>{props.answer}</p>
      <Dialog
          actions={actions}
          modal={false}
          open={props.dialogOpenState}
          onRequestClose={() => props.handleCloseDialog()}
      >
        {props.answer}
      </Dialog>
    </div>
  )
}

export default Answer;
