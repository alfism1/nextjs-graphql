import React from 'react';

function H2({children, style}) {
  return (
    <h2 className={`text-xl font-bold ${style}`}>{children}</h2>
  );
}

export default H2;