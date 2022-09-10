import React from 'react'
import logo from '../../logo.svg'
import classes from './style.module.css'
export default function Navbar(){
  return(
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt='logoImage' className={classes.image_width}/>
        </div>
        <div className='flex'>
          <p className='underline'>John Wick</p>
          <span>Developer</span>
        </div>
      </div>
    </nav>
  )
}