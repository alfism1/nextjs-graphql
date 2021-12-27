import React, { useContext, useState } from "react";
// import { SocketContext, useSocket } from "../context/SocketProvider";

function playground() {
  // const context = useContext(SocketContext);
  const [list, setList] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(1);
  const [name, setName] = useState<string>("");

  const handleCLick = () => {
    setCounter((n) => n + 1);
    setList([
      ...list,
      {
        userId: counter,
        username: name,
      },
    ]);
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
console.log(list)
  return (
    <div>
      <input onChange={handleChange} type="text" className="border" />
      <button onClick={handleCLick} className="border">
        Submit
      </button>
      {name}
      {counter}
      {list.map((d) => {
        return (
          <div key={d.userId}>
            {d.userId} - {d.username}
          </div>
        );
      })}
    </div>
  );
}

export default playground;
