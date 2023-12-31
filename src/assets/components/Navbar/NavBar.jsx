import React, {useState} from "react";
import{ Link, Outlet }from"react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import Footer from "../Footer/Footer";
import "./NavBar.css";


const NavBar = () =>
{
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    }

    const [isMobile, setIsMobile] = useState(false)
    return (
    <>
        <nav className="navbar">
        <ul className={isMobile ? "nav-links-mobile":"nav-links"}
onClick = {()=>  setIsMobile(false)}>
            <Link to="/" className="home"> <li>Home</li></Link>
            {auth.token ? (
                   <>
                <Link to="/" className="logout" onClick={handleLogout}>
                <li>Log Out</li>
                </Link>
                <Link to="/projects" className="project"><li>Create Project</li></Link>
                </>
                ) : (
                <Link to="/login" className="login" ><li>Login</li></Link>
                )} 
        </ul> 
        <button className="mobile-menu-icon"
    onClick={()=>setIsMobile(!isMobile)}>
      {isMobile?(<i><FaTimes/> </i>):(<i ><GiHamburgerMenu/></i>)}
    </button>
        </nav>
        <Outlet />  
        <Footer/>  
    </>  
    );
}

export default NavBar;

