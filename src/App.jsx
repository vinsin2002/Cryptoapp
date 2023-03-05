import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  return (
    <div className='h-screen w-screen bg-gray-900'>
    <Navbar/>
    <div className='flex flex-wrap justify-center mt-5'>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}

export default App