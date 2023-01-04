import "./App.css";
// import { useState } from "react";
import React from 'react'
import {Route, Routes,Link  } from 'react-router-dom';
import { Check_in } from "./pages/Check_in.js";
import { Check_out } from "./pages/Check_out.js";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home.js";

function App() { 
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/check_in" element={<Check_in/>} />
    <Route path="/check_out" element={<Check_out/>} />
    <Route path="/sign_in" element={<SignIn/>} />
    <Route element={Error} />
    </Routes>
    </div>
   
  
  );

}

// JSX
export default App;