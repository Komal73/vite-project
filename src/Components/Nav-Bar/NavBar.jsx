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
        <div className="options">HOME</div>
        <div className="options">ABOUT US</div>
        <div className="options">SERVICE</div>
        <div className="options">PRICING</div>
        <div className="options">BLOG</div>
        <div className="options">CONTACT</div>
    </div>
    </>
  )
}

export default NavBar