import React from "react";
import "./App.css";
import { AuthProvider } from "./components/context/AuthContext";
import UserAuth from "./components/context/userAuth/UserAuth";

function App() {
  return (
    <AuthProvider>
      {/* Providerで囲まれた値を共有する */}
      <div className="App">
        <h2>#4 useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  );
}

export default App;
