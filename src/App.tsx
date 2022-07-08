import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Song} from "./pages/Song/Song";

function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/song/:id" element={<Song/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
