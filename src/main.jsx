import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Portfolio from './Portfolio'
import './index.css'
import Account from './components/Account'
import Error from './components/Error'
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
  ,
)
