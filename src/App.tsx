import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Home/>}/>

    </Routes>
  );
}

export default App;
