import React from 'react'
import {img_url} from "../../utlis/utlis";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header