import React from "react"

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
                    <li><a href="#">Equations</a></li>
                    <li><a href="#">Graphic calculator</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
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
                    <img src={logo} alt="Logo" type="button" />
                </button>

                {this.renderNav()}

                {this.renderHamBtn()}
            </header>
        )
    }
}

export default Header