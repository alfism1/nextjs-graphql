import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { io } from "socket.io-client";

import { Chat as ChatComponent } from "../../components/chat";
import UserClient from "../../components/chat/Login";

import useLocalStorage from "../../hooks/useLocalStorage";

const Chat = ({ chatUsername, color }) => {
  // const socket = io("http://localhost:4000");

  const [user, setUser] = useState(null);

  const [getId, setId] = useLocalStorage("id", null);

  useEffect(() => {
    // setId({
    //   name: "test",
    //   id: "hehe",
    // });
    // console.log(getId());
    // // client-side
    // socket.on("connect", () => {
    //   console.log(socket.id);
    // });
    // return () => {
    //   socket.disconnect();
    // };
  }, [user]);

  // const handleClick = () => {
  //   socket.emit("chat message", "My name is " + name);
  //   socket.on("chat message", function (msg) {
  //     console.log("msg:", msg, socket.id);
  //     // var item = document.createElement("li");
  //     // item.textContent = msg;
  //     // messages.appendChild(item);
  //     // window.scrollTo(0, document.body.scrollHeight);
  //   });
  //   console.log("test");
  // };

  // <div
  //           onClick={handleClick}
  //           role={`button`}
  //           className="p-4 border cursor-pointer"
  //         >
  //           Button
  //         </div>

  return (
    <>
    {chatUsername}
      {user == null ? (
        <UserClient />
      ) : (
        <ChatComponent>
          <ChatComponent.Header name={chatUsername} />
          <ChatComponent.Container>
            <ChatComponent.Bubble
              name={"Roger"}
              color={"text-green-700"}
              message="est drive fdsafdsa Test drive fdsafdsa Test drive fdsafdsa Test
            drive fdsafdsa Test drive fdsafdsa Test drive fdsafdsa Test drive
            fdsafdsa Test drive fdsafdsa"
            />
            <ChatComponent.Bubble
              self={true}
              message="My name is methos oh yeah and you make me so happy"
            />
            <ChatComponent.Bubble
              name={"Granger"}
              color={"text-red-700"}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            />
          </ChatComponent.Container>
          <ChatComponent.Input handleClick={null} handleKeyPress={null} />
        </ChatComponent>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chatUsername: state.main.chatUsername,
  };
};

export default connect(mapStateToProps)(Chat);
