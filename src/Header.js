import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div>
      <div className='header'>
        <div className='d1'>
          <FontAwesomeIcon icon={faApple} />
          tv+

        </div>
        <div className='d2'>
          <button><FontAwesomeIcon icon={faUserPlus} />Sign In</button>
        </div>

      </div>
      <div className='poster'>
        <div className='container'>
          <h1>All Apple Originals.</h1>
          <h2>Exclusively on Apple TV+. Watch here and on the Apple TV app across your devices.</h2>
          <button className='b2'>Start Free Trial</button>
          <p className='phead'>7 days free, then ₹ 99.00/month.</p>
          <p className='phead'>
            <span>Or 3 months free when you buy an eligible Apple device. </span>
            <a href='html'>Terms apply. </a>
            <span>Some titles coming later to Apple TV+.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header