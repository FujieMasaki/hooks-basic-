import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ItemList from "./components/items/ItemList";

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
        <ItemList/>
      </header>
    </div>
  );
}

export default App;
