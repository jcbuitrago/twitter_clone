import React from "react";
import Leftbar from "./Leftside/Leftbar.js";
import Middlebar from "./Middle/Middlebar.js";
import Rightbar from "./Rightside/Rightbar.js";
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