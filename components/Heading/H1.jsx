import React from 'react';

function H1({children, style}) {
  return (
    <h1 className={`text-2xl font-bold ${style}`}>{children}</h1>
  );
}

export default H1;