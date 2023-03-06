import React from 'react'
import Navbar from './components/Navbar'
import Watch from './logic/Watch'
function App() {
  return (
    <div className=' h-screen overflow-auto bg-gray-900  '>
      <Navbar/>
      <Watch/>
    </div>
  )
}

export default App