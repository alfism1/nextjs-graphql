import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setChatUsername } from "../../redux/actions/main";

import { Chat as ChatComponent } from "../../components/chat";
import UserClient from "../../components/chat/Login";
import Sidebar from "../../components/chat/Sidebar";

import { useSocket } from "../../context/SocketProvider";

import useLocalStorage from "../../hooks/useLocalStorage";

const Chat = ({ chatUsername, setChatUsername }) => {
  let socket = useSocket();

  const [userList, setUserList] = useState([]);
  const [message, setMessage] = useState("");
  const [socketMessage, setSocketMessage] = useState(null);
  const [messageList, setMessageList] = useState([]);

  const [getSocketId, _setSocketId] = useLocalStorage("socketId", null);

  useEffect(() => {
    socket?.auth = { username: chatUsername };
    socket?.connect();

    socket?.on("users", (users) => {
      console.log("users", users)
      setUserList(users);
    });

    socket?.on("user connected", (newUser) => {
      console.log(userList)
      // setUserList([...userList, newUser]);
    });

    socket?.on("chat message", (msg) => {
      setSocketMessage(msg);
    });
  }, [chatUsername]);

  useEffect(() => {
    if (socketMessage === null) return;
    setMessageList([...messageList, socketMessage]);
    return () => {
      setMessageList([]);
    };
  }, [socketMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(socket?.id);

    socket.emit("chat message", {
      socketId: socket.id,
      username: chatUsername,
      message,
    });

    setMessage("");
  };

  const handleKeyPress = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {chatUsername == null ? (
        <UserClient />
      ) : (
        <div className="container max-w-screen-2xl h-auto mx-auto shadow-xl flex flex-row">
          <Sidebar socketId={getSocketId()} activeName={chatUsername} userList={userList} />
          <ChatComponent>
            <ChatComponent.Header
              name={"somebody"}
              setChatUsername={setChatUsername}
            />
            <ChatComponent.Container>
              {messageList.map((m, i) => {
                return (
                  <ChatComponent.Bubble
                    key={i}
                    name={m.username}
                    color={"text-green-700"}
                    message={m.message}
                    self={m.socketId == socket.id}
                  />
                );
              })}
              {/* <ChatComponent.Bubble
              self={true}
              message="My name is methos oh yeah and you make me so happy"
            />
            <ChatComponent.Bubble
              name={"Granger"}
              color={"text-red-700"}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            /> */}
            </ChatComponent.Container>
            <ChatComponent.Input
              value={message}
              handleSubmit={handleSubmit}
              handleKeyPress={handleKeyPress}
            />
          </ChatComponent>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatUsername: state.main.chatUsername,
  };
};

const mapDispatchToProps = {
  setChatUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
