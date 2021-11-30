import React from 'react';
import { Props } from "./type"

function H2({children, style}: Props) {
  return (
    <h2 className={`text-xl font-bold ${style}`}>{children}</h2>
  );
}

export default H2;