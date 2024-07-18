import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <img src="../data/logo.png" className="footer-logo" alt="" />
        <ul className='links'>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="socials">
            <div className="icons">
                <img src="../data/instagram.svg" alt="" />
            </div>
            <div className="icons">
                <img src="../data/twitter.svg" alt="" />
            </div>
            <div className="icons">
                <img src="../data/youtube.svg" alt="" />
            </div>
            <div className="icons">
                <img src="../data/facebook.svg" alt="" />
            </div>
        </div>
        <div className = "copyright">
            <hr />
            <p>© 2024, All Rights Reserved</p>
        </div>
    </div>
  )
    
  
}

