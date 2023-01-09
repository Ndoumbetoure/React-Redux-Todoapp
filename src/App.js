import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Component/Home';
import Addtask from "./Component/AddTask"

function App() {
  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/task/:addtask' element={<Addtask/>}/>
       </Routes>
    </>
  );
}

export default App;
