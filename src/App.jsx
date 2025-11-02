// import { useState } from 'react'
import React from "react"
import './App.css'
import './index.css'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Projects from "./Components/Projects"

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default App
