import React from 'react'
import netflix from '../../assets/netflix.png'
import hbo from '../../assets/Hbo.png'
import hulu from '../../assets/hulu.png'
import amazon from '../../assets/amazon.png'
import disney from '../../assets/disney.png'
import { Button } from '@mui/material'



export default function Footer() {
  return (
    <div className='w-screen flex flex-col items-center justify-center mt-[20rem]'>
      <h1 className='text-white  font-dancing text-[4rem] drop-shadow-md text-center  '>Find Your Next Bing</h1>
      <p className=' text-center leading-[2.2rem] mt-6 text-white/50 text-[1.2rem] font-lato'>Streaming services push their originals. <br />
        Find the best thing to watch for you, not them.</p>
        <div className='w-[15rem] items-center justify-between flex mt-[2rem]'>
          <img src={netflix} className='w-[2.3rem] bg-white/10 p-[6px] rounded-full aspect-[1/1] object-contain'  alt="" />
          <img src={hbo} className='w-[2.3rem] bg-white/10 p-[6px] rounded-full aspect-[1/1] object-contain'  alt="" />
          <img src={hulu} className='w-[2.3rem] bg-white/10 p-[6px] rounded-full aspect-[1/1] object-contain'  alt="" />
          <img src={amazon} className='w-[2.3rem] bg-white/10 p-[6px] rounded-full aspect-[1/1] object-contain'  alt="" />
          <img src={disney} className='w-[2.3rem] bg-white/10 p-[6px] rounded-full aspect-[1/1] object-contain'  alt="" />
        </div>
        <div className='mt-5 flex  flex-col gap-5 md:flex-row'>
          <button className='bg-teal-300 px-6 font-Josefin uppercase py-3 rounded-3xl text-[#4753b6] hover:bg-amber-400'>Sign up</button>
          <button className=' bg-[#1185f96e] px-6 font-Josefin uppercase py-3 rounded-3xl text-[#ffffff] hover:bg-amber-400'><span>Try it out</span></button>

        </div>
      {/* text-7xl font-bold text-white drop-shadow-lg shadow-black */}
    </div>
  )
}
