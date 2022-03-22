import React from "react";
import Leftbar from "./Leftbar.js";
import Middlebar from "./Middlebar.js";
import Rightbar from "./Rightbar.js";
import './Main.css';


function Main() {
  return (
    <div className="main">
      <Leftbar />
      <Middlebar />
      <Rightbar />
    </div>
  );
}

export default Main;