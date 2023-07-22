import React from 'react'
import './HomePage.css'
import NavBar from '../../Components/Nav-Bar/NavBar'
import Sliders from '../../Components/Slider/Sliders'
import About from '../../Components/About-Us/About'
import Prices from '../../Components/Prices/Prices'
const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Sliders/>
    <About/>
    <Prices/>
    </>
  )
}

export default HomePage