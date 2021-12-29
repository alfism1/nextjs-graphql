import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import useLocalStorage from "../hooks/useLocalStorage";

export const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState();
  const [_getSocketId, setSocketId] = useLocalStorage("socketId", null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");

    newSocket.on("connect", () => {
      setSocketId(newSocket.id);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
