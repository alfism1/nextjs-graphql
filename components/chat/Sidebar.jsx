import React from "react";
import Link from "next/link";
import styles from "./chat.module.scss";

const Sidebar = ({ socketId, activeName, userList }) => {
  return (
    <div className="w-80 bg-blue-200">
      <div
        className={`flex items-center bg-blue-900 text-white ${styles.header}`}
      >
        <Link href="/chat">
          <div className="text-2xl cursor-pointer mx-5">
            <b>AF</b>SAMU
            <sub className="text-xs">chat</sub>
          </div>
        </Link>
      </div>

      <div>
        <div className="p-4 border-b-4 border-blue-100">
          <span className="font-bold text-xl block">{activeName}</span>
          <div className="flex items-center mt-2">
            <span className="bg-green-500 w-3 h-3 rounded-full inline-block" />{" "}
            <span className="text-xs ml-1 font-bold">Active</span>
          </div>
        </div>

        {userList
          .filter((u) => u.userID != socketId)
          .map((u) => {
            console.log(u)
            return <div key={u.userID}>{u.username}</div>;
          })}
      </div>
    </div>
  );
};

export default Sidebar;
