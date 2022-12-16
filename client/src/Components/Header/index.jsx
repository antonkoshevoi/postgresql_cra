import React from 'react'
import { ShoppingCart } from "phosphor-react"

import './styles.scss'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation();
    console.log('loc', pathname);

    return(
        <header className="header">
            <div className='header-logo'>
            <Link to="/" className='logo-link'>Shopping <span>Demo</span></Link>
            </div>
            
            <nav className='header-nav'>
                <ul>
                    <li><Link to="/" className={`link ${pathname === "/" ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/products" className={`link ${pathname === "/products" ? 'active' : ''}`}>Products</Link></li>
                </ul>
            </nav>

            <div className='header-cart'>
                <div className='auth-email'>
                    email
                </div>
                <button className='btn btn-white'>
                    <ShoppingCart size={30} color="#424242"/>
                </button>
            </div>
        </header>
    )
}

export default Header