import React from "react";
import { useState, useEffect } from "react";

const Counter: React.VFC = () => {
  useEffect(() => {
    console.log("mount時と特定の値が変更した時に表示");
    const countUp = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
      console.log('countUp')
  }, 1000);
  // 非同期処理やsubscription処理を行なった場合はクリーンアップする
  return ()=>{
    clearInterval(countUp)
    console.log('unmount')
  }
}, []);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
    <div>
      <span>カウント1</span>
      <button onClick={() => setCount1(count1 + 1)}></button>
      {count1}
    </div>

    <div>
      <span>カウント2</span>
      <button onClick={() => setCount2(count2 + 2)}></button>
      {count2}

    </div>

    </>
  );
};

export default Counter;
