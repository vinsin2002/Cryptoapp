import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  return (
    <div className=' sm:h-screen bg-gray-900'>
    <Navbar/>
    <div className='flex flex-wrap justify-center mt-5'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}

export default App