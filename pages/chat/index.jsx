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

  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [userList, setUserList] = useState([]);
  const [message, setMessage] = useState("");
  const [socketMessage, setSocketMessage] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [chatWith, setChatWith] = useState(null); // chatWith.socketID, chatWith.username
  const [isPrivateChat, setIsPrivateChat] = useState(false);

  const [getSocketId, _setSocketId] = useLocalStorage("socketId", null);

  const router = useRouter();

  const forwardedRef = useRef();

  // handle socket connection after user keyed in a username
  useEffect(() => {
    if (chatUsername == null) {
      router.push("/chat/login");
      return;
    }

    if (socket !== undefined && isSocketConnected == false) {
      socket.auth = { username: chatUsername, color: chatColor };
      socket.connect();

      socket.on("users", (users) => {
        setUserList(users);
      });

      socket.on("user connected", (newUser) => {
        console.log(userList);
        // setUserList([...userList, newUser]);
      });

      // socket for general chat
      socket.on("chat message", (msg) => {
        setSocketMessage(msg);
      });

      // socket for private chat
      socket.on("private message", (msg) => {
        setSocketMessage(msg);
      });

      setIsSocketConnected(true);
    }
    return () => {
      socket.off("users");
      socket.off("user connected");
      socket.off("chat message");
      setIsSocketConnected(false);
    };
  }, [chatUsername]);

  // handle scroll to the latest message
  useEffect(() => {
    forwardedRef.current?.scrollTo(0, forwardedRef.current?.scrollHeight);
  }, [messageList]);

  // populate message on messageList state via socketMessage state
  useEffect(() => {
    if (socketMessage === null) return;
    setMessageList([...messageList, socketMessage]);
    return () => {
      setMessageList([]);
    };
  }, [socketMessage]);

  // update chatWith state
  useEffect(() => {
    if (chatWith != null) {
      console.log(chatWith);
      setIsPrivateChat(true);
    } else {
      setIsPrivateChat(false);
    }

    return () => {
      setIsPrivateChat(false);
    };
  }, [chatWith]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(socket.id);

    if (isPrivateChat) {
      console.log("private", chatWith);
      socket.emit("private message", {
        socketId: socket.id,
        to: chatWith.socketID,
        username: chatUsername,
        message,
        textColor: chatColor,
      });
    } else {
      socket.emit("chat message", {
        socketId: socket.id,
        username: chatUsername,
        message,
        textColor: chatColor,
      });
    }

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
            setChatWith={setChatWith}
            chatWith={chatWith}
            activeName={chatUsername}
            userList={userList}
            chatColor={chatColor}
          />
          <ChatComponent>
            <ChatComponent.Header
              chatWith={chatWith?.username}
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
