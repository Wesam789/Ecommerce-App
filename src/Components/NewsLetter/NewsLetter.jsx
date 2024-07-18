import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='news'>
        <h1>Get Offers and Rewards In Your Email!</h1>
        <p>Enter email below to subscribe</p>
        <div>
            <input type="email" placeholders='Email*'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
