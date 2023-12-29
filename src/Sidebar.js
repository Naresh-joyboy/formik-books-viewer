import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
    <a className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Library Admin <sup>2</sup></div>
    </a>

    
    <hr className="sidebar-divider my-0"/>

    
    <li className="nav-item active">
        <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Booksin</span></Link>
    </li>

    
    <hr className="sidebar-divider"/>

   
    <div className="sidebar-heading">
        Interface
    </div>

    
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/middle" 
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Book Details</span>
        </Link>
    </li>

    <li className="nav-item">
        <Link className="nav-link collapsed" to="/end" 
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Update Form</span>
        </Link>
    </li>
    

    <hr className="sidebar-divider"/>
</ul>


  )
}

export default Sidebar