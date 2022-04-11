import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login.js";
import Mainpage from "./components/Main.js";
import Signup from "./components/Signup/Signup.js";
import './App.css';
import { Route, Link, Routes, Navigate } from 'react-router-dom';


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