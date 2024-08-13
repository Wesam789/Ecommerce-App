import React from 'react'
import './Footer.css'
import logoPic2 from '../data/logo.png';
import igPic from '../data/instagram.svg';
import twitterPic from '../data/twitter.svg';
import ytPic from '../data/youtube.svg';
import fbPic from '../data/facebook.svg';

export const Footer = () => {
  return (
    <div className='footer'>
        <img src={logoPic2} className="footer-logo" alt="" />
        <ul className='links'>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="socials">
            <div className="icons">
                <img src={igPic} alt="" />
            </div>
            <div className="icons">
                <img src={twitterPic} alt="" />
            </div>
            <div className="icons">
                <img src={ytPic} alt="" />
            </div>
            <div className="icons">
                <img src={fbPic} alt="" />
            </div>
        </div>
        <div className = "copyright">
            <hr />
            <p>© 2024, All Rights Reserved</p>
        </div>
    </div>
  )
    
  
}

