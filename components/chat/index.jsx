import React from "react";
import styles from "./chat.module.scss";

import { FaSignOutAlt } from "react-icons/fa";

export const Chat = ({ children, ...restProps }) => {
  return (
    <div className="w-full" {...restProps}>
      {children}
    </div>
  );
};

Chat.Header = ({ chatWith, setChatUsername, ...restProps }) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 w-full px-4 bg-blue-900 text-white font-bold shadow-lg ${styles.header}`}
      {...restProps}
    >
      <div className="flex items-center gap-2">
        {/* <span className="bg-green-500 w-3 h-3 rounded-full inline-block" />{" "} */}
        {chatWith}
      </div>
      <button
        onClick={() => {
          setChatUsername(null);
        }}
      >
        <FaSignOutAlt />
      </button>
    </div>
  );
};

Chat.Container = ({ children, ...restProps }) => {
  return (
    <div
      className={`relative w-full bg-blue-100 ${styles.container}`}
      {...restProps}
    >
      <div className={`p-3 overflow-y-scroll ${styles.overflow}`}>
        {children}
      </div>
    </div>
  );
};

Chat.Input = ({ handleKeyPress, handleSubmit, value, ...restProps }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full" {...restProps}>
        <input
          onChange={handleKeyPress}
          value={value}
          placeholder="Enter your chat here"
          type="text"
          className="flex-1 p-2.5 border border-blue-200 outline-none"
        />
        <button
          type="submit"
          className="p-2.5 text-sm font-bold border border-blue-900 bg-blue-900 text-white outline-none"
        >
          Send
        </button>
      </div>
    </form>
  );
};

Chat.Bubble = ({ self, name, color, message }) => {
  let textColor;
  switch (color) {
    case "red":
      textColor = styles.text_red;
      break;
    case "green":
      textColor = styles.text_green;
      break;
    case "blue":
      textColor = styles.text_blue;
      break;
    case "yellow":
      textColor = styles.text_yellow;
      break;
    case "purple":
      textColor = styles.text_purple;
      break;
    case "indigo":
      textColor = styles.text_indigo;
      break;
    case "pink":
      textColor = styles.text_pink;
      break;
    default:
      textColor = "";
      break;
  }
  return (
    <div className="mt-2">
      <span
        className={`shadow-md bg-white rounded-lg p-2 text-sm max-w-lg inline-block ${
          self && "float-right"
        }`}
      >
        <span className={`font-bold block mb-1 ${textColor}`}>{self ? "You" : name}</span>

        {message}
      </span>
      {self && <div className="clear-both" />}
    </div>
  );
};