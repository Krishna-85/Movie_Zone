import React from 'react'
import { Link } from 'react-router-dom'
 

const HorizontalCards = ({data}) => {
  return (
     
      <div className='w-[100%] pl-2   overflow-y-hidden mb-5 p-3   flex'>  
        {data.map((d,i)=><div key={i} className='min-w-[18%]   bg-zinc-900 h-full flex flex-col items-center  mr-5'>
            <div className='w-full h-1/2  bg-red-100 '>
            <img className=' w-full h-full   object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />
            </div>
         <div className='h-1/2 p-2'>
         <h1 className='text-lg mt-5   text-white font-semibold '> {d.name || d.title || d.original_name || d.original_title}</h1>
         <p className='  text-zinc-300 mb-3 text-[1rem] mt-3'>{d.overview.slice(0,110)}...<span className='text-zinc-500 text-sm'>read more</span></p>
         </div>
        
        </div>)}
      </div>

 )
}

export default HorizontalCards

     




