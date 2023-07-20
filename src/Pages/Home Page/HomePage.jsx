import React from 'react'
import './HomePage.css'
import NavBar from '../../Components/Nav-Bar/NavBar'
import Sliders from '../../Components/Slider/Sliders'
import About from '../../Components/About-Us/About'
const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Sliders/>
    <About/>
    </>
  )
}

export default HomePage