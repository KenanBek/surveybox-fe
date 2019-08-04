import React from 'react';

function Preview() {
  return (
    <div>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.PUBLIC_URL}</p>
      <p>{process.env.REACT_APP_BE_URL}</p>
    </div>
  );
}

export default Preview;
