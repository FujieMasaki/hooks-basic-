import React from "react";
import { useState } from "react";

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>ボタン</button>
    <p>test</p>
      <button onClick={() => setCount(0)}>リセット</button>
    </>
  );
};

export default Counter;
