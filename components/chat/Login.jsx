import React, { useRef, useState } from "react";

import { connect } from "react-redux";
import useLocalStorage from "../../hooks/useLocalStorage";
import { setChatUsername, setChatColor } from "../../redux/actions/main";

const UserClient = ({ setChatUsername, setChatColor }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("gray");

  const [_getChatUsername, saveChatUsername] = useLocalStorage(
    "chatUsername",
    ""
  );

  const colors = [
    {
      color: "gray",
      bg: "bg-gray-600",
      bgHover: "hover:bg-gray-800",
    },
    {
      color: "red",
      bg: "bg-red-600",
      bgHover: "hover:bg-red-800",
    },
    {
      color: "green",
      bg: "bg-green-600",
      bgHover: "hover:bg-green-800",
    },
    {
      color: "blue",
      bg: "bg-blue-600",
      bgHover: "hover:bg-blue-800",
    },
    {
      color: "indigo",
      bg: "bg-indigo-600",
      bgHover: "hover:bg-indigo-800",
    },
    {
      color: "yellow",
      bg: "bg-yellow-600",
      bgHover: "hover:bg-yellow-800",
    },
    {
      color: "purple",
      bg: "bg-purple-600",
      bgHover: "hover:bg-purple-800",
    },
    {
      color: "pink",
      bg: "bg-pink-600",
      bgHover: "hover:bg-pink-800",
    },
  ];

  const [_getChatColor, saveChatColor] = useLocalStorage("chatColor", "");

  const usernameRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    saveChatUsername(usernameRef.current.value); // set username localstorage
    setChatUsername(usernameRef.current.value); // set username redux
    saveChatColor(color); // set color localstorage
    setChatColor(color); // set color redux
  };

  const handleChange = (e) => {
    // maximum 14 character
    if (e.target.value.length > 14) {
      usernameRef.current.value = username;
      setMessage("Maximum character is 14");
    } else {
      setMessage("");
      setUsername(e.target.value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-3">
      <div className="w-full max-w-lg border p-4">
        <h2 className="text-xl border-b border-gray-200 mb-4">
          Enter any username
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col text-md">
          <input
            ref={usernameRef}
            onChange={handleChange}
            type="text"
            className="border w-full p-2 outline-none"
            placeholder="Any random username"
          />
          <div className="flex flex-row items-center gap-2 py-2">
            <span className="font-bold text-sm">Choose color:</span>
            {colors.map((c) => {
              return (
                <span
                  key={c.color}
                  onClick={() => {
                    setColor(c.color);
                  }}
                  className={`inline-block ${c.bg} ${c.bgHover} w-3 h-3 rounded-full cursor-pointer`}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="bg-green-800 active:bg-green-700 text-white px-3 py-1"
          >
            Submit
          </button>
        </form>
        <span className="text-sm mt-2 block text-red-700">{message}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (_state) => {
  return {};
};

const mapDispatchToProps = {
  setChatUsername,
  setChatColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserClient);
