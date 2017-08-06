import React from 'react';
import './Question.css';
import muiThemeable from 'material-ui/styles/muiThemeable';

var Question = (props) => {
  return (
    <div className="question">
    <h1>{props.question}</h1>
    </div>
  )
}

export default Question;