import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Card from '../components/Card';
function roundTo(n, place) {    
    return +(Math.round(n + "e+" + place) + "e-" + place);
  }
function Watch() {
  let api = 'https://api.coincap.io/v2/assets?ids=';
let watchlist = ["bitcoin","ethereum","dogecoin","xrp","solana","tether"]
const [coindata, setcoindata] = useState([]);
const [loaded,setloaded] = useState(false);
let some = [];
async function getUser() {
  for(let coin in watchlist)
  {
      try {
        const response = await axios.get(api+watchlist[coin]);
        some.push({sym:response.data.data[0].symbol,price:roundTo(response.data.data[0].priceUsd,2),percentchange:roundTo(response.data.data[0].changePercent24Hr,2)});
      } catch (error) {
        console.error(error);
      }
  }
  setcoindata(some);
  setloaded(true);
}
useEffect(() => {
  getUser();
}, [])

    return (
      <div>
          {!loaded && <div className=' flex justify-center mt-20'><Loader/></div>}
          {loaded && <div className='flex flex-wrap justify-center mt-5'>
              {coindata.map((coind) => (
                <Card id={coind.sym} perchange={coind.percentchange} price={coind.price} />
              ))}
          </div>}
      </div>
    )
}

export default Watch
