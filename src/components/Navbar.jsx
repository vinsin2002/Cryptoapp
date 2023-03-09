import React from 'react'
import { NavLink } from 'react-router-dom'
import App from '../App'
function Navbar() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col flex-wrap'>
       <div className=' text-white font-rubik text-5xl p-2 ml-8 sm:text-center'>
         Crypto.  
        </div>  
        <ul className='text-white font-rubik cursor-default flex justify-evenly mt-5 mb-3'>
            <li>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2" : ""
  } to="/">Watchlist</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2" : ""
  } to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2" : ""
  } to="/account">Account</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar