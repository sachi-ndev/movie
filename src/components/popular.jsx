import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import './../styles/page.css'
import { Link, useNavigate } from 'react-router-dom';


export default function Popular() {
  const navigate = useNavigate();

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

    

    const[popular,setPopular]=useState([])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5fad7e6b68adce9f77a3fce7a53cb886')
        .then(res=>{
            console.log(res.data.results);
            setPopular(res.data.results)
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

  return (
    
    <div className='w-[100vw] my-[4rem]' >
      <Link to='/popular'>
        <h1 className='text-4xl ml-5 mb-5 font-Josefin text-white'>Popular Movies</h1>
        </Link>
        <Carousel 
         className='w-[100vw] mx-auto   overflow-hidden'
         responsive={responsive}
         
         >
            
        {popular.map(pop =>(
            <div className='w-[90vw] h-[50vh] mt-9'  id='mdiv'>
              {/* <div className=' relative mx-8 aspect-[3/4] w-[15rem] hover:w-[18rem] ' id='popdiv '> */}
              <div className=' relative mx-10  aspect-[3/4] w-[15rem] rounded-xl overflow-hidden ' id='popdiv' onClick={()=>navigate(`/Details/${pop.id}`,{state:{id:pop.id}})}>

              <img className='absolute inset-0 aspect-[3/4] object-cover '
              src={`https://image.tmdb.org/t/p/original/${pop.poster_path}`}
              alt="" />
              <div  id='poptitle' className='absolute inset-0 font-ptsans  bg-gradient-to-t from-black/30  via-transparent flex flex-col items-start justify-end text-white p-2'>
              <h2 className='font-bold'>{pop.original_title}</h2>
              <h2>{pop.release_date}</h2>
              <h3>{pop.vote_average}⭐</h3>
              {/* <p>{pop.overview}</p> */}


            {/* <button onClick={()=>navigate(`/Details/${pop.id}`,{state:{id:pop.id}})} className='bg-blue-700  px-2 py-1 rounded-lg  text-xs'>ADD TO WATCH</button> */}
              

              {/* <p>{pop.overview}</p> */}
            </div>
            </div>
            </div>
        ))}
        </Carousel>

      
    </div>
  )
}
