import React, { useRef } from "react";

import { connect } from "react-redux";
import { setChatUsername } from "../../redux/actions/main";

const UserClient = ({ setChatUsername }) => {
  const username = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setChatUsername(username.current.value);
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
            ref={username}
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setChatUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserClient);
