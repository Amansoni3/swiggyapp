import React , {useEffect, useState , useContext} from 'react'
import {img_url} from "../../utlis/utlis";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utlis/useOnlineStatus';
import UserContext from '../../utlis/UserContext';

const Header = () => {
    const [btnName , setBtnName] = useState("Login")

    // if no dependancy array => useEffect will call on every render.
    // if dependency array is empty = [] => useEffect will called on initial render(just once).
    // if dependancy array is [btnName] => called everytime is updated.

    useEffect(()=>{
        console.log("useEffect is called")
    },[btnName])

    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)

    return (
        <div className="flex justify-between items-center px-4 py-1 sticky top-0 bg-pink-200 shadow-lg ">
            <div className="w-24">
                <img className="rounded-[100px]" src={img_url} />
            </div>
            <div className="">
                <ul className='flex p-4'>
                    <li className={onlineStatus ? `text-green-600 p-4 text-xl` : `text-red-700 p-4 text-xl`}>Online Status : {onlineStatus ? "Online" : "Offline"}</li>
                    <li className='p-4 text-xl hover:text-red-500'><Link to="/">Home</Link></li>
                    <li className='p-4 text-xl hover:text-red-500'><Link to="about">About us</Link></li>
                    <li className='p-4 text-xl hover:text-red-500'><Link to="contact">Contact us</Link></li>
                    <li className='p-4 text-xl hover:text-red-500'><Link to="grocery">Grocery</Link></li>
                    <li className='p-4 text-xl hover:text-red-500'>Cart</li>
                    <button className="p-4 text-xl" onClick={()=>{btnName === "Login" ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
                    <li className='p-4 text-xl hover:text-red-500'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header