import React, { useEffect, useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { setChatUsername } from "../../redux/actions/main";
import { useRouter } from "next/router";

import { Chat as ChatComponent } from "../../components/chat";

import Sidebar from "../../components/chat/Sidebar";

import { useSocket } from "../../context/SocketProvider";

import useLocalStorage from "../../hooks/useLocalStorage";

const Chat = ({ chatUsername, setChatUsername, chatColor }) => {
  let socket = useSocket();

  const [userList, setUserList] = useState([]);
  const [message, setMessage] = useState("");
  const [socketMessage, setSocketMessage] = useState(null);
  const [messageList, setMessageList] = useState([]);

  const [getSocketId, _setSocketId] = useLocalStorage("socketId", null);

  const router = useRouter();

  const forwardedRef = useRef();

  useEffect(() => {
    if (chatUsername == null) {
      router.push("/chat/login");
      return;
    }

    if (socket !== undefined) {
      socket.auth = { username: chatUsername, color: chatColor };
      socket.connect();

      socket.on("users", (users) => {
        setUserList(users);
      });

      socket.on("user connected", (newUser) => {
        console.log(userList);
        // setUserList([...userList, newUser]);
      });

      socket.on("chat message", (msg) => {
        setSocketMessage(msg);
      });
    }
  }, [chatUsername]);

  useEffect(() => {
    forwardedRef.current.scrollTo(0, forwardedRef.current.scrollHeight);
    console.log(forwardedRef.current.scrollHeight);
  }, [messageList]);

  useEffect(() => {
    if (socketMessage === null) return;
    setMessageList([...messageList, socketMessage]);
    return () => {
      setMessageList([]);
    };
  }, [socketMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(socket.id);

    socket.emit("chat message", {
      socketId: socket.id,
      username: chatUsername,
      message,
      textColor: chatColor,
    });

    setMessage("");
  };

  const handleKeyPress = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {chatUsername && (
        <div className="container max-w-screen-2xl h-auto mx-auto shadow-xl flex flex-row">
          <Sidebar
            socketId={getSocketId()}
            activeName={chatUsername}
            userList={userList}
            chatColor={chatColor}
          />
          <ChatComponent>
            <ChatComponent.Header
              name={"somebody"}
              setChatUsername={setChatUsername}
            />
            <ChatComponent.Container forwardedRef={forwardedRef}>
              {messageList.map((m, i) => {
                return (
                  <ChatComponent.Bubble
                    key={i}
                    name={m.username}
                    color={m.textColor}
                    message={m.message}
                    self={m.socketId == socket.id}
                  />
                );
              })}
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
    chatColor: state.main.chatColor,
  };
};

const mapDispatchToProps = {
  setChatUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
