import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

function roundTo(n, place) {    
  return +(Math.round(n + "e+" + place) + "e-" + place);
}
function Card(props) {
  // console.log(props.imager);
  let sign = "";
  if(props.perchange >= 0)
  {
    sign = "+";
  }
  else
  {
    sign = "";
  }
  return (
    <div className='bg-white h-20 w-full font-rubik border-2 border-blue-900 sm:w-1/3 m-3 rounded-xl shadow-blue-900 shadow-xl flex items-center justify-evenly'>
        <div className='flex space-x-3 items-center p-2'>
            <div className=''>
            <img src={props.imager} alt="" className='h-10 w-10' />
            </div>
            <h1 className='text-3xl text-gray-500 '>{props.id}</h1>
        </div>
        <div>
        <h1 className={`text-2xl ${sign === "+" ? ' text-green-500' : ' text-red-500'}`}>{sign}{props.perchange}%</h1>
        <h1 className='text-gray-500 '>{props.price}$</h1>
        </div>
    </div>
  )
}

export default Card