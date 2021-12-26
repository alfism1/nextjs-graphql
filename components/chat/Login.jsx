import React, { useRef, useState } from "react";

import { connect } from "react-redux";
import useLocalStorage from "../../hooks/useLocalStorage";
import { setChatUsername } from "../../redux/actions/main";

const UserClient = ({ setChatUsername }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [_getChatUsername, saveChatUsername] = useLocalStorage(
    "chatUsername",
    ""
  );

  const usernameRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    saveChatUsername(usernameRef.current.value);
    setChatUsername(usernameRef.current.value);
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row text-md"
        >
          <input
            ref={usernameRef}
            onChange={handleChange}
            type="text"
            className="border w-full p-2 md:py-1 outline-none"
            placeholder="Any random username"
          />
          <button
            type="submit"
            className="bg-green-800 active:bg-green-700 text-white px-3 py-1 md:py-0"
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UserClient);
