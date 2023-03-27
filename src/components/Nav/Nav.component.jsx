import { Fragment } from 'react'
import {Outlet, Link, NavLink} from 'react-router-dom'
import './Nav.style.css'

const Nav =()=>{
    return(
        <Fragment>
            <div className='navigation'>
            <Link className='logo-container' to='/'>
               <h1 className='logo'>eH</h1> 
            </Link>
            <div className='nav-links-container'>
            <NavLink to="/"
                style={
                    ({ isActive}) => {
                        return {
                 fontWeight: isActive ? "bold" : "",
                 color: isActive ? "black" : "white",
                };}}
                className="nav-link"> 
                About
                </NavLink>
                
                <NavLink to="/projects"
                style={({ isActive }) => {
                        return {
                 fontWeight: isActive ? "bold" : "",
                 color: isActive ? "black" : "white",

                };}}
                className="nav-link"> 
                Projects
                </NavLink>
                <NavLink to="/contact"
                style={({ isActive}) => {
                        return {
                 fontWeight: isActive ? "bold" : "",
                 color: isActive ? "black" : "white",
                };}}
                className="nav-link"> 
                Contact
                </NavLink>
            </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Nav