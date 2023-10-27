import React from 'react';

const BeautifulScreen = (props) => {
  return (
    <div className="beautiful-screen">
      <p>{props.calculation}</p>
      <h2>{props.result}</h2>
    </div>
  );
};

export default BeautifulScreen;
