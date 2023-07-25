import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='Logo'>
                    <a href='#'>
                        <img src='logo.webp' alt='logo' style={{ height: "160%", width: "100%" }} />
                    </a>
                </div>
                <div className='text'>
                    <h1>INDIAN FOOD RESTRAUNT</h1>
                    <br />
                    <h2>The Best Taste Food</h2>
                </div>
                <div className='social'>
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-square-instagram insta"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-square-facebook facebook"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-square-twitter twitter"></i></a></li>                       
                    </ul>
                </div>
                <div className='website'>indianfoodrestraunt.com</div>
                <div className="copyright">Copyright &copy; | 2023 | Komal | Indian Food Restraunt</div>
            </div>
        </>
    )
}

export default Footer