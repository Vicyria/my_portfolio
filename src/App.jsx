import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Header from "./Components/Header";
import Contact from "./Components/Contact"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/portfolio" element = {<Portfolio />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
    </BrowserRouter>
      
  )
}
export default App;