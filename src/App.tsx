import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
    // isDisplayの表示を変える処理
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>useEffect</h2>
        <button onClick={() => handleDisplay()}>
          {isDisplay ? "コンポーネント非表示" : "コンポーネント表示"}
        </button>
        {isDisplay && <Counter />}
      </header>
    </div>
  );
}

export default App;
