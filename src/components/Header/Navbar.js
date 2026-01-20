import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/images/ice-cream-logo.png";
import reactLogo from "../../assets/images/react.svg";

const Navbar = () => {
    return(
        <header>
            <div className="container" >
                <div>
                    <img className={classes.logo} src={logo} alt="Logo"/>
                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="React" className={classes.reactLogo}/><strong>React</strong>
                </div>
            </div>
        </header>
    )
}

export default Navbar;