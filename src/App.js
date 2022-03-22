import React from "react";
import Login from "./components/Login.js";
import Mainpage from "./components/Main.js";
import Signup from "./components/Signup.js";
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';



function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
  );
}

export default App;
