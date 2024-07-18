import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <img src="../pics/logo.png" className="footer-logo" alt="" />
        <ul className='links'>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="socials">
            <div className="icons">
                <img src="../pics/instagram.svg" alt="" />
            </div>
            <div className="icons">
                <img src="../pics/twitter.svg" alt="" />
            </div>
            <div className="icons">
                <img src="../pics/youtube.svg" alt="" />
            </div>
            <div className="icons">
                <img src="../pics/facebook.svg" alt="" />
            </div>
        </div>
        <div className = "copyright">
            <hr />
            <p>© 2024, All Rights Reserved</p>
        </div>
    </div>
  )
    
  
}

