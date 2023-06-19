import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';

import NumberDisplay from './NumberDisplay';
import CardComponent from "./CardComponent";
import Welcome from './Welcome';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/card' element={<CardComponent></CardComponent>}></Route>
        <Route path='/number' element={<NumberDisplay></NumberDisplay>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/' element={<Welcome></Welcome>}></Route>
      </Routes>
      <br />
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/card'}>Card</Link>
      <br />
      <Link to={'/number'}>Number</Link>
      {/* <br />
      <Link to={'*'}>404 Not Found</Link> */}
    </div>
  );
}

export default App;