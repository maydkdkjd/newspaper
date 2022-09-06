import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom'
const Nav = ()=>{
    return(
        <div className="header">
            <h1 id="logo">Mayank</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav