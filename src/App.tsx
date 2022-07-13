import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import './App.css';

import {Home} from "./pages/Home";
import {Song} from "./pages/Song";
import {NavBar} from "./components";
import {BaseRoutePaths} from "./utils/enums";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={BaseRoutePaths.home} element={<Home/>}/>
          <Route path={`${BaseRoutePaths.song}/:id`} element={<Song/>}/>
          <Route path='/' element={<Navigate to={BaseRoutePaths.home}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
