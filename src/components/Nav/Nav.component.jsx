import { Fragment } from 'react'
import {Outlet, Link} from 'react-router-dom'
import './Nav.style.css'

const Nav =()=>{
    return(
        <Fragment>
            <div className='navigation'>
            <Link className='logo-container' to='/'>
               <h1 className='logo'>eH</h1> 
            </Link>
            <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
                    About
                </Link>
                <Link className='nav-link' to='/projects'>
                    Projects
                </Link>
                <Link className='nav-link' to='/contact'>
                    Contact
                </Link>
            </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Nav