import React from 'react'
import './HomePage.css'
import NavBar from '../../Components/Nav-Bar/NavBar'
import Sliders from '../../Components/Slider/Sliders'
import About from '../../Components/About-Us/About'
import Prices from '../../Components/Prices/Prices'
import Blog from '../../Components/Blog/Blog'
const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Sliders/>
    <About/>
    <Prices/>
    <Blog/>
    </>
  )
}

export default HomePage