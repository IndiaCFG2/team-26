import React from 'react'
import '../styles/Navigation.scss'
import logo from "../assets/logo.png"
import {Link} from 'react-router-dom'
// import resLogo from "../assets/resLogo.png"

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-row">
                <img src={logo} className="logo" alt="ivizz logo"/>
                <div>
                    <h1>FPO Connect</h1>
                    <div className="line">Connecting, together !</div>
                </div>
            </div>
            <div>
                <Link to="/">Marketplace</Link>
                <Link to="/community">Community</Link>
                <Link to="/login">Login</Link>
            </div>
            {/* <img src={resLogo} alt="logo" className="res-logo"/> */}
        </nav>
    )
}
