import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'

export const Hero = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className = 'hero'>
        <div className="hero-left">
            <div>
              <p className='top'>Just Arrived</p>
              <p className='bottom'>Jackets and Pants</p>
            </div>
            <div className = "hero-newest">
              <p onClick = {()=>{setMenu("tops")}}><Link to='/tops'>Latest Drops</Link></p>
            </div>
        </div>
        <div className="hero-right">
        </div>
    </div>
  )
}
