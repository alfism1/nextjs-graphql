import React, { ReactNode } from "react";
import { Props } from "./type";

function H1({ children, style }: Props) {
  return <h1 className={`text-2xl font-bold ${style}`}>{children}</h1>;
}

export default H1;
