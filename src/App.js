import React from "react";
import Leftbar from "./components/Leftbar.js";
import Middlebar from "./components/Middlebar.js";
import Rightbar from "./components/Rightbar.js";
import './App.css';


function App() {
  return (
    <div className="app">
      <Leftbar />
      <Middlebar />
      <Rightbar />
    </div>
  );
}

export default App;
