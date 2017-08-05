import React from 'react';

var Answer = (props) => {
  return (
    <div>
      <p onClick={() => props.handleShowAnswerClick()}>{props.answer}</p>
    </div>
  )
}

export default Answer;
