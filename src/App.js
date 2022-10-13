import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./component/Register.js"
import Login from "./component/Login.js"
import Bidding from "./component/Bidding"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path = '/' element={<Bidding/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
