import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./paginas/Homepage";
import AboutPage from "./paginas/Aboutpage";
import ServiciosPage from "./paginas/Serviciospage";
import NotFoundPage from "./paginas/NotFound";
import Navbar from "./componentes/Navbar";

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/servicios" element={<ServiciosPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
















/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './componentes/HelloWorld';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HelloWorld/>
    </>
  )
}

export default App
*/