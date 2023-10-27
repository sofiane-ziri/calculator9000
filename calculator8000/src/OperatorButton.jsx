import React from 'react';

const OperatorButton = (props) => {
  return (
    <button className="operator-button" onClick={() => props.onClick(props.operator)}>
      {props.operator}
    </button>
  );
};

export default OperatorButton;
