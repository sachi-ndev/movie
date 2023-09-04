import React, { useEffect, useState } from 'react'
// import { MagnifyingGlass } from '@phosphor-icons/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './../../../styles/search.css'

export default function Search() {

  const navigate = useNavigate();
  const[EachId,setPopular]=useState([])

    const[srchval,setSearch]=useState('')


    useEffect(()=>{

      axios.get(`https://api.themoviedb.org/3/search/movie?query=${srchval}&&api_key=5fad7e6b68adce9f77a3fce7a53cb886`)

      .then(res=>{
         
            setPopular(res.data.results)
            console.log(srchval);

        })
        .catch(err =>{
            console.log(err);
        })
        
    },[srchval]) 

  return (
    <div >
      
      <input type="text" 
      onChange={(e)=>setSearch(e.target.value)} 
      placeholder='Search'
        className='h-[1rem] w-[12rem] rounded-xl p-[1rem] text-left  relative'/>
      <div className='absolute h-[10rem] top-10 overflow-y-scroll ' id='scrollsr' >

        {EachId.map(srch =>(
            <div onClick={()=>{navigate(`/Details/${srch.id}`,{state:{id:srch.id}})}}>

                <h1 className='le h-[2rem] text-xs  w-[12rem] px-2 overflow-hidden   rounded-xl  bg-[#7286fa91] my-[2px]'>{srch.original_title}</h1>

                                            

                
            </div>
        ))
        .splice(0,15)
        }

      </div>

      {/* <button className='flex'><MagnifyingGlass size={30} className='-mx-[2rem] h-[1.5rem] ' /></button> */}

    </div>
  )
}

