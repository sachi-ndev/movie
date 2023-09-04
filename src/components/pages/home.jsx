import React from 'react'
// import Proto from './proto'
// import Upcoming from '../upcoming'
import Carousaldiv from './carousal'
import Popular from '../popular'
import Toprated from '../toprated'
import Nowplaying from '../nowplaying'
import Upcoming from '../upcoming'
import Footer from './footer'
import Copyright from './copyright'
// import { Link } from 'react-router-dom'
// import About from '../aboutmovie'

export default function Home() {
    
  return (
    <div>
      <Carousaldiv />
      
      <div className='mt-[2rem] pt-[5rem] pb-[10rem] bg-gradient-to-t from-[#3f51b5]   via-[#6042b3d3]'>
      <Popular/>
      <Toprated/>
      <Nowplaying/>
      <Upcoming/>
      <Footer/>
      </div>
      <Copyright/>
    </div>
  )
}
