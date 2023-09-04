import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import './../styles/page.css'
import { useNavigate } from 'react-router-dom';


export default function Nowplaying() {

  const navigate=useNavigate()


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    

    const[nowplaying,setNowplaying]=useState([])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5fad7e6b68adce9f77a3fce7a53cb886')
        .then(res=>{
            console.log(res.data.results);
            setNowplaying(res.data.results)
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

  return (
    
    <div className='w-[100vw] my-[4rem]'  >
        <h1 className='text-4xl ml-5 mb-5 font-Josefin text-white'>Now Playing Movies</h1>
        {/* <hr className='bg-green-400'/> */}
        <Carousel 
         className='w-[100vw] mx-auto   overflow-hidden'
         responsive={responsive}
         
         >
            
        {nowplaying.map(now =>(
            // <div className='w-[90vw] mx-auto'>
            // <div className='w-[90vw] h-[48vh] mt-6'  id='mdiv'>
            <div className='w-[90vw] h-[50vh] mt-9'  id='mdiv ' onClick={()=>navigate(`/Details/${now.id}`,{state:{id:now.id}})}>


              {/* <div className=' relative mx-8 aspect-[3/4] w-[15rem] hover:w-[18rem] ' id='popdiv '> */}
              <div className=' relative mx-10 aspect-[3/4] w-[15rem] rounded-xl overflow-hidden ' id='popdiv'>

              <img className='absolute inset-0 aspect-[3/4] object-cover '
              src={`https://image.tmdb.org/t/p/original/${now.poster_path}`}
              alt="" />
              <div  id='poptitle' className='absolute inset-0  bg-gradient-to-t from-black/30 font-ptsans via-transparent flex flex-col items-start justify-end text-white p-2'>
              <h2 className='font-bold'>{now.original_title}</h2>
              <h2>{now.release_date}</h2>
              <h3>{now.vote_average}⭐</h3>
              {/* <button onClick={()=>navigate(`/Details/${now.id}`,{state:{id:now.id}})}>add</button> */}


              {/* <p>{pop.overview}</p> */}
            </div>
            </div>
            </div>
        ))}
        </Carousel>

      
    </div>
  )
}
