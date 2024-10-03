import React , {useEffect, useState} from 'react'
import {img_url} from "../../utlis/utlis";
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName , setBtnName] = useState("Login")

    // if no dependancy array => useEffect will call on every render.
    // if dependency array is empty = [] => useEffect will called on initial render(just once).
    // if dependancy array is [btnName] => called everytime is updated.

    useEffect(()=>{
        console.log("useEffect is called")
    },[btnName])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={img_url} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About us</Link></li>
                    <li><Link to="contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header