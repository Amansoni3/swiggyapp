import React , {useState} from 'react'
import {img_url} from "../../utlis/utlis";

const Header = () => {
    const [btnName , setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={img_url} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header