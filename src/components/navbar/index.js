import React from 'react'
import logo from '../../logo.svg'
import classes from './style.module.css'
export default function Navbar(){
  return(
    <nav className={`navbar bg-light fixed-top ${classes.nav_shadow}`}>
      <div className="container-fluid">
        <div className="navbar-brand">
          <div className='flex'>
            <img src={logo} alt='logoImage' className={classes.image_width}/>
            <h1 className={classes.text_react}>React</h1>
          </div>
        </div>
        <div className='inline-grid mr-3'>
          <span className='text-base font-medium'>John Wick</span>
          <span className='text-xs text-center'>Developer</span>
        </div>
      </div>
    </nav>
  )
}