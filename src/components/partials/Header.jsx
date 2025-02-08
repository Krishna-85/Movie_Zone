import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
     
  return (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
      backgroundPosition:'top 5%',
      backgroundSize:'cover',
    //   backgroundSize:'contain',
    //   backgroundRepeat:'no-repeat'
       
        
    }}  
    className='w-full text-white flex flex-col items-start    p-10 font-semibold justify-end pb-10 h-[50vh]'>
      <h1  className='text-3xl w-[70%] text-white font-black '> {data.name || data.title || data.original_name || data.original_title}</h1>
      <p className='w-[70%] text-zinc-300 mb-3 text-lg mt-3'>{data.overview.slice(0,210)}...<Link className='text-blue-400 text-sm'>read more</Link></p>
      
      <p>
      <i class="text-yellow-500  ri-megaphone-fill"></i>{data.release_date || "No Information"}
      <i class="text-yellow-500 ri-album-fill ml-5"></i>{data.media_type.toUpperCase()}
      </p>

      <Link className='p-5 bg-[#6556CD] py-2 rounded-md font-semibold mt-5'>Watch Trailer</Link>
     
    </div>
  )
}

export default Header
