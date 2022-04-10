import React from "react";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
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
