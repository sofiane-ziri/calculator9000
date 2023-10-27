import React from 'react';

const ItSOverNineThousand = (props) => {
  if (props.result > 9000) {
    return <h2>It's Over 9000 !!!</h2>;
  }
  return null;
};

export default ItSOverNineThousand;
