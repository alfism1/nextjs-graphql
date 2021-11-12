import React, { useState } from 'react';

import {Loader} from '../components'

function playground(props) {
  const [text, setText] = useState("");
  const [data, setData] = useState({name: "", age: 10})

  const handleChange = (e) => {
    const {target} = e;

    setText(target.value)

    setData({...data, name: target.value})
  }

  const handleChangeNumber = (e) => {
    const {target} = e;
    setData((prev) => ({...prev, age: target.value}));
    console.log(data);
  }

  return (
    <div className="container mx-auto px-4 md:px-10 mb-8">
      <Loader />
      <div>
        <input className="mb-8" type="text" onChange={handleChange} value={text} />
      </div>
      <div>
        <input className="mb-8" type="number" onChange={handleChangeNumber} value={data.age} />
      </div>
      {text} - {data.name} - {data.age}
    </div>
  );
}

export default playground;