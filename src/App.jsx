
import Home from "./page/Home.jsx"
import Detail from "./page/Detail.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import React, { useEffect, useState } from 'react';


export default function App() {


useEffect(() => {
    fetch('http://localhost:8080/api/data')
      .then(response => response.json())
      .then(data => console.log(JSON.stringify(data.core, null, 2)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



const code = `import Home from "./page/Home.jsx"
import Detail from "./page/Detail.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"`;

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail value={code}/>} />
      </Routes>
    </Router>
    </>
  )
}