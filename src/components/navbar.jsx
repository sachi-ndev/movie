import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, MagnifyingGlass} from '@phosphor-icons/react'
import '../index.css'
import logo from './../assets/filmfy.png'
import logo1 from './../assets/filmfy1.png'
import { Button } from '@mui/material'
import { useState,useEffect } from 'react'
import Search from './pages/indivitual/search'
import axios from 'axios'


export default function Navbar() {

  return (

    <div className='fixed top-0 z-[10000]'>
     <div className='w-screen h-[3rem] bg-[#2f43925c]  flex items-center justify-between p-[1rem] ' >
      <Link to='/' >
        <img src={logo1} alt="" className='w-[14rem] md:w-[12rem] '/>
      </Link>
      {/* <Link to='/favs'><Heart size={32} weight="fill" fill='red'/></Link> */}
      <div className='flex items-center justify-between '>

        <Search/>


{/* 
      <input type="text"  placeholder='Search' className='h-[1rem] w-[12rem] rounded-xl p-[1rem] text-left bg-[#c1eaec7d]'/>
 

      <button className='flex'><MagnifyingGlass size={30} className='-mx-[2rem] h-[1.5rem] ' /></button> */}



      {/* <button className='hidden md:block px-[1.3rem] ml-5 text-[1.1rem] bg-slate-700 rounded-xl text-white '>sign in</button> */}
      <div className='mx-5'> 
      {/* <Link to='/abt' >  */}
      <Button  variant='contained' >sign in</Button>
      {/* </Link> */}
     
      </div>
      </div>
     </div>
    </div>
  )
}
