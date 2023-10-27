import React from 'react';

const EqualButton = (props) => {
  return (
    <button className="equal-button" onClick={props.onClick}>
      =
    </button>
  );
};

export default EqualButton;
