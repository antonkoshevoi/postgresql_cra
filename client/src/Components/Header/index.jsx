import React, { useContext } from 'react'
import { ShoppingCart } from "phosphor-react"
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'

import './styles.scss'
import { useEffect } from 'react'
import { useState } from 'react'


const Header = ({ toggle }) => {
    const { pathname } = useLocation()
    const [ authState ] = useContext(AuthContext)
    const [email, setEmail] = useState(null)

    useEffect(() => {
        if (authState.email && authState.signedIn) {
            setEmail(authState.email)
        } else {
            setEmail(null)
        }
    }, [authState])

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
                {email  && <div className='auth-email'>
                    {email}
                </div>}
                <button className='btn btn-white'>
                    <ShoppingCart size={30} color="#424242" onClick={toggle}/>
                </button>
            </div>
        </header>
    )
}

export default Header
