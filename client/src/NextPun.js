import React from 'react';

var NextPun = (props) => {
  return (
    <div>
      <button onClick={() => props.handleNextPunClick()}>Next Pun</button>
    </div>
  )
}

export default NextPun;
