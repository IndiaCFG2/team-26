import React from 'react'
import '../styles/Navigation.scss'
import logo from "../assets/Logo.png"
import resLogo from "../assets/resLogo.png"

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-row">
                <img src={logo} className="logo" alt="ivizz logo"/>
                <div>
                    <h1>iVizz</h1>
                    <div className="line">Hygiene Care, Reimagined !</div>
                </div>
            </div>
            <img src={resLogo} alt="logo" className="res-logo"/>
        </nav>
    )
}
