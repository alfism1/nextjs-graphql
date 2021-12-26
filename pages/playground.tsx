import React, { useContext, useState } from "react";
// import { SocketContext, useSocket } from "../context/SocketProvider";

function playground() {
  // const context = useContext(SocketContext);
  const [list, setList] = useState<any[]>([]);

  const handleCLick = () => {
    setList([...list, 321]);
  };

  return (
    <div>
      <button onClick={handleCLick}>Test</button>
      {list.map((d) => {
        return d;
      })}
    </div>
  );
}

export default playground;
