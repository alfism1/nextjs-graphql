import * as t from "../types";

const main = (
  state = {
    name: "guest",
    chatUsername: "random guy",
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
    case t.SET_CHAT_USERNAME:
      return {
        ...state,
        chatUsername: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
