import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/images/ice-cream-logo.png";
import userLogo from "../../assets/images/user-logo.png";

const Navbar = () => {
    return(
        <header>
            <div className="container" >
                <div>
                    <img className={classes.logo} src={logo} alt="Logo"/>
                </div>
                <div className="textRight">
                    <img src={userLogo} alt="React" className={classes.userLogo}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;