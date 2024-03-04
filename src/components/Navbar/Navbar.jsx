import React from 'react'
import { person, backward } from '../../assets'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar">
                <div className="logo">
                    <a href='/' >
                        The <span>Product</span> Platform
                    </a>
                </div>
                <div className="navbar-links-container">
                    <div className="dropdown-container">
                        <a href="#learn">
                            <p>Learn</p>
                            <img src={backward} alt="arrow" />
                        </a>
                        <a href="#practice">
                            <p>Practice</p>
                            <img src={backward} alt="arrow" />
                        </a>
                    </div>
                    <p><a href="#account"><img src={person} alt="person" /></a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar