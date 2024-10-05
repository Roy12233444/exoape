import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Work from './Components/Work'
import PlayReel from './Components/PlayReel'
import Images from './Components/images'
import Spread from './Components/Spread'
import LocomotiveScroll from "locomotive-scroll";

function App() {

const locomotiveScroll = new LocomotiveScroll();



  return (
    <div className='w-full'>
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
    </div>
  )
}

export default App