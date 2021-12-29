import React, {memo} from "react";
import Link from "next/link";
import styles from "./chat.module.scss";

const Sidebar = ({ socketId, activeName, userList, chatColor }) => {
  console.log("hehehe");
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

      <div className={styles.sidebar_body}>
        <div className={`p-4 ${styles.active_user}`}>
          <span className="font-bold text-xl block mb-4">{activeName}</span>
          <div className="flex items-center">
            <span
              className={`bg-green-500 w-3 h-3 rounded-full inline-block`}
            />{" "}
            <span className="text-xs ml-2 font-bold">active</span>
          </div>
        </div>

        <span className="block bg-blue-900 text-white text-sm font-bold text-center py-2">
          Chat other people
        </span>
        <div className={`overflow-y-scroll ${styles.user_list}`}>
          {userList
            .filter((u) => u.userID != socketId)
            .map((u) => {
              return (
                <div
                  role="button"
                  key={u.userID}
                  className="border-b hover:bg-blue-300 transition-all duration-150 p-4"
                >
                  <UserList username={u.username} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const UserList = ({ username, isActive = true }) => {
  return (
    <div className="flex items-center">
      <span
        className={`${
          isActive ? "bg-green-500" : "bg-yellow-600"
        } w-3 h-3 rounded-full inline-block`}
      />{" "}
      <span className="text-xs ml-2 font-bold">{username}</span>
    </div>
  );
};

export default memo(Sidebar);
