// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default function Proto() {
//     const[upcomingapi,setApi]=useState([])

//     useEffect(()=>{

//     axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=5fad7e6b68adce9f77a3fce7a53cb886')   
//         .then(res=>{
//             console.log(res.data.results);
//             setApi(res.data.results)
//         })
//         .catch(err =>{
//             console.log(err);
//         }) 
//     },[])
 
//   return (
//     <div className='flex w-auto overflow-x-scroll '>

//         {upcomingapi.map(ap =>(
//             <div className=' bg-red-400 w-48 p-4 flex flex-col'>
//                 <img className='h-[15rem] w20'
//                  src={`https://image.tmdb.org/t/p/original/${ap.backdrop_path}`}
//                  alt="" />
//                 <h1>{ap.original_title}</h1>
//                 <h3>{ap.vote_average}</h3>
                

//             </div>
//             // <li>{ap.title}</li>
//         ))}


//     </div>
//   )
// }
