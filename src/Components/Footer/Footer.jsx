import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
      <>
        <div className="footer">
          <div className="Logo">
            <a href="#">
              <img
                src="logo.webp"
                alt="logo"
                style={{ height: "160%", width: "100%" }}
              />
            </a>
          </div>
          <div className="text">
            <h2>INDIAN FOOD RESTRAUNT</h2>
            <h2>The Best Taste Food</h2>
          </div>
          <div className="social">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
          <div className="website">indianfoodrestraunt.com</div>
          <div className="copyright">
            Copyright &copy; | 2023 | Komal & Yogesh | Indian Food Restraunt
          </div>
        </div>
      </>
    );
}

export default Footer