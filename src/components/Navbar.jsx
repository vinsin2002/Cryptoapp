import React from 'react'

function Navbar() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col flex-wrap'>
       <div className=' text-white font-sans text-5xl p-2 ml-8 sm:text-center'>
         Crypto   
        </div>  
        <ul className='text-white cursor-default flex justify-evenly mt-5 mb-3'>
            <li className='hover:border-b-2'>
                watchlist
            </li>
            <li className='hover:border-b-2'>
                portfolio
            </li>
            <li className='hover:border-b-2'>
                account
            </li>
        </ul>
    </div>
  )
}

export default Navbar