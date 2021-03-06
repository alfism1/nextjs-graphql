import * as t from "../types";

const main = (
  state = {
    name: "guest",
  },
  action
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case t.SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
