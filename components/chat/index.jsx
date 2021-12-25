import React from "react";
import styles from "./chat.module.scss"

export const Chat = ({ children, ...restProps }) => {
  return (
    <div
      className="container max-w-screen-2xl h-auto mx-auto block shadow-xl"
      {...restProps}
    >
      {children}
    </div>
  );
};

Chat.Header = ({ name, ...restProps }) => {
  return (
    <div
      className={`flex items-center justify-start gap-2 w-full px-4 bg-blue-900 text-white font-bold shadow-lg ${styles.header}`}
      {...restProps}
    >
      <span className="bg-green-500 w-3 h-3 rounded-full inline-block" /> {name}
    </div>
  );
};

Chat.Container = ({ children, ...restProps }) => {
  return (
    <div
      className={`relative w-full bg-blue-100 ${styles.container}`}
      {...restProps}
    >
      <div className={`p-3 overflow-y-scroll ${styles.overflow}`}>{children}</div>
    </div>
  );
};

Chat.Input = ({ handleKeyPress, handleClick, ...restProps }) => {
  return (
    <div className="flex w-full" {...restProps}>
      <input
        onKeyPress={handleKeyPress}
        placeholder="Enter your chat here"
        type="text"
        className="flex-1 p-2.5 border border-blue-200 outline-none"
      />
      <button
        onClick={handleClick}
        className="p-2.5 text-sm font-bold border border-blue-900 bg-blue-900 text-white outline-none"
      >
        Send
      </button>
    </div>
  );
};

Chat.Bubble = ({ self, name, color, message }) => {
  return (
    <div className="mt-2">
      <span
        className={`shadow-md bg-white rounded-lg p-2 text-sm max-w-lg inline-block ${
          self && "float-right"
        }`}
      >
        <span className={`font-bold block mb-1 ${color}`}>{name}</span>
        {message}
      </span>
      {self && <div className="clear-both" />}
    </div>
  );
};
