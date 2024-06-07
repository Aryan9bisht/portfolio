import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Project from './components/Project'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Technologies from './components/Technologies'
import About from './components/About'
import Work from './components/Work';

function App() {
 

  return (
  
       <BrowserRouter>
    <ResponsiveAppBar />
      <div className="fontStyle"style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'
      ,background: 'rgb(15,22,36)',color:'whitesmoke'}}>
      <Intro />
      <Project />
      <Technologies />
      <Work />
      <About />
      </div>

  
      <Footer />
      </BrowserRouter>
    
  )
}

export default App
