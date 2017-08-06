import React from 'react';
import './Answer.css';


var Answer = (props) => {
  return (
    <div className="answer">
      <p onClick={() => props.handleShowAnswerClick()}>{props.answer}</p>
    </div>
  )
}

export default Answer;
