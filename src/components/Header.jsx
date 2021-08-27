import React from "react"
import { Link } from "react-router-dom"

import logo from "../assets/images/logo.svg"
import hamburgerBtn from "../assets/images/hamburgerButton.svg"
import close from "../assets/images/closeButton.svg"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nav: false
        }
    }

    renderNav = () => {
        let nameClass

        if(this.state.nav){
            nameClass = "visible"
        }else{
            nameClass = "hidden"
        }

        return(
            <nav className={`header__nav ${nameClass}`}>
                <div className="nav-header">
                    <button>
                        <img src={close} alt="Close button" onClick={this.closeNav}/>
                    </button>
                </div>
                <ul>
                    <li className="page iEquations"><Link to="/" onClick={this.closeNav}>Equations</Link></li>
                    <li className="page iGraphic-calculator"><Link to="/graphic-calculator" onClick={this.closeNav}>Graphic calculator</Link></li>
                    <li className="page iAbout"><Link to="/about" onClick={this.closeNav}>About</Link></li>
                    <li className="page iContact"><Link to="/contact" onClick={this.closeNav}>Contact</Link></li>
                </ul>
            </nav>
        )
    }

    renderHamBtn = () => {
        let nameClass

        if(this.state.nav){
            nameClass = "btn-hidden"
        }else{
            nameClass = "btn-visible"
        }

        return(
            <button className={`header__hamburger-btn ${nameClass}`} onClick={this.openNav}>
                <img src={hamburgerBtn} alt="Hamburger button" type="button" />
            </button>
        )
    }

    closeNav = () => {
        this.setState({
            nav: false
        })
    }

    openNav = () => {
        this.setState({
            nav: true
        })
    }

    render(){

        return(
            <header>
                <button className="header__logo" >
                    <Link to="/">
                        <img src={logo} alt="Logo" type="button" />
                    </Link>
                </button>

                {this.renderNav()}

                {this.renderHamBtn()}
            </header>
        )
    }
}

export default Header