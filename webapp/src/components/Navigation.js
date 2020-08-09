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
                <Link to="/login">
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 6.02002H6C3.79 6.02002 2 7.81002 2 10.02V18H6V9.98002H42V38.04H6V30H2V38.02C2 40.23 3.79 41.98 6 41.98H42C44.21 41.98 46 40.22 46 38.02V10.02C46 7.81002 44.21 6.02002 42 6.02002ZM22 32L30 24L22 16V22H2V26H22V32Z" fill="#66b3bd"/>
                    </svg>

                </Link>
            </div>
            {/* <img src={resLogo} alt="logo" className="res-logo"/> */}
        </nav>
    )
}
