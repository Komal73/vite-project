import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <> 
    <div className='main-nav-bar'>
        <div className='Logo'>
            <a href='/'>
                <img src='logo.webp' alt='logo' style={{height:"160%", width:"100%"}}/>
            </a>
        </div>

        <div className='SignIn'>
            <div className='buttons'>
                <button type='submit'>Register</button>
            </div>

            <div className='Icons'>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            </div>

        </div>
    </div>

    <div className='lower-nav'>
        <div className="options"><a href="">HOME</a></div>
        <div className="options"><a href="">ABOUT US</a></div>
        <div className="options"><a href="">SERVICE</a></div>
        <div className="options"><a href="">PRICING</a></div>
        <div className="options"><a href="">BLOG</a></div>
        <div className="options"><a href="">CONTACT</a></div>
    </div>
    </>
  )
}

export default NavBar