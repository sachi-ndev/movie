import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
  const location = useLocation()

const[EachId,setPopular]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${location.state.id}?api_key=5fad7e6b68adce9f77a3fce7a53cb886`)
    .then(res=>{
        console.log(res.data);
        setPopular(res.data)
    })
    .catch(err =>{
        console.log(err);
    })
},[location])
  return (
   
    <div className='  w-[100vw] bg-white flex flex-col items-center justify-center'>
       
            <div className=' relative  w-[100vw] h-[90vh] my-[6.5vh] overflow-hidden bg-gradient-to-t'>
              {/* <div  id='poptitle' className='absolute inset-0  bg-gradient-to-t from-black/30 font-ptsans via-transparent flex flex-col items-start justify-end text-white p-2'> */}

                <img 
                src={`https://image.tmdb.org/t/p/original/${EachId.backdrop_path}`}
                className='absolute inset-0  object-cover'
                alt="" />
                {/* <div className='absolute inset-0  bg-[#ffffff37]'></div> */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#aca6a649] to-[#a69f9f31]'></div>

                <div className='absolute inset-0 flex '>
                    <div className=' my-auto ml-[5rem] flex md:flex-col items-center justify-center'>
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${EachId.poster_path}`}
                        className='aspect-[3/4] w-[20rem] rounded-xl '
                        alt="" />
                    </div>
                    <div className='w-[70vw] h-[10] p-[5rem] font-lato text-white'>
                        <h1 className='text-[3rem]'>{EachId.original_title}</h1>
                        <h1 className=''>{EachId.release_date}</h1>
                        <h1 className='w-[30rem] text-justify leading-6'>{EachId.overview}</h1>

                    </div>

                </div>
                


     
            </div>
      
      
    </div>
  )
}

