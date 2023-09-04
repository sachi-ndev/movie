import React,{useEffect,useState} from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
// import { Button } from '@mui/material';


export default function Carousaldiv() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



      const[upcomingapi,setApi]=useState([])

      useEffect(()=>{
  
      axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=5fad7e6b68adce9f77a3fce7a53cb886')   
          .then(res=>{
              // console.log(res.data.results);
              setApi(res.data.results)
          })
          .catch(err =>{
              console.log(err);
          }) 
      },[])



  return (
    <div className=''>
<Carousel className='h-50vh m-[5rem] md:m-0 md:h-[calc(100vh-3rem)] md:mt-11 rounded-2xl overflow-hidden'
 responsive={responsive}
 autoPlay
 infinite={true}
//  autoPlaySpeed={1000}
 keyBoardControl={true}
//  transitionDuration={1000}
// showDots={true}
dotListClass="custom-dot-list-style"

 >

{upcomingapi.map(ap =>(
    <div className=''>
            <div className=' relative aspect-[1/1.25] md:aspect-[2/1] w-[80vw] rounded-2xl overflow-hidden  mx-auto '>
                <img  className='absolute inset-0 h-full w-full object-cover shadow-slate-950 drop-shadow-lg'
                 src={`https://image.tmdb.org/t/p/original/${ap.backdrop_path}`}
                 alt="" />

                 {/* <div className='h-[77vh] bg-slate-300 absolute top-0'></div> */}
                 <div className='absolute inset-0 p-6 flex flex-col items-start justify-end text-white bg-gradient-to-r from-black via-transparent'>
                <h1 className='font-lato text-[1rem] md:text-[2rem] '>{ap.original_title}</h1>

                <p className='w-[25rem] text-justify'>{ap.overview}</p>
                <h3 className='my-3'>{ap.vote_average} ⭐</h3>

                <button className='bg-blue-700/40  px-4 py-2 rounded-lg hover:bg-blue-700'>ADD TO WATCH</button>


                
                </div>
            </div>
            </div>
        ))}


</Carousel>
</div>
      
  )
}
