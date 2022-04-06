import React from "react";
import Topbar from "./Top/Topbar.js";
import Middlebar from "./Middle/Middlebar.js";
import Bottombar from "./Bottom/Bottombar.js";
import './Main.css';


function Main() {
  return (
    <div className="main">
      <Topbar />
      <Middlebar />
      <Bottombar />
    </div>
  );
}

export default Main;