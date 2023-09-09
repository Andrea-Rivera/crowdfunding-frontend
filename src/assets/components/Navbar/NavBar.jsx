import React, {useState} from "react";
import{ Link, Outlet }from"react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import "./NavBar.css";


const NavBar = () =>
{
    const [isMobile, setIsMobile] = useState(false)
    return (
    <div>
        <nav className="navbar">
        <ul className={isMobile ? "nav-links-mobile":"nav-links"}
onClick = {()=>  setIsMobile(false)}>
            <Link to="/" className="home"> <li>Home</li></Link>
            <Link to="/login" className="login">Log In</Link>
        </ul> 
        <button className="mobile-menu-icon"
    onClick={()=>setIsMobile(!isMobile)}>
      {isMobile?(<i><FaTimes/> </i>):(<i ><GiHamburgerMenu/></i>)}
    </button>
        </nav>
        <Outlet />    
    </div>  
    );
}

export default NavBar;

