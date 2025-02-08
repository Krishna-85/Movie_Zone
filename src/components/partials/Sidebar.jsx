
import { Link } from 'react-router-dom'

const Sidebar = () => {



  return (
    <>    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
      <h1 className='text-2xl text-white font-bold '>
      <i class="ri-tv-fill text-[#6556CD] mr-2 "></i>
        <span>MOVIE ZONE</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 gap-3 font-semibold text-xl'>
       <h1 className='text-white font-semibold  text-xl  mt-10 mb-5'>
           New feeds
       </h1>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-fire-fill"></i>  Trending</Link>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-bard-fill"></i>  Popular</Link>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-clapperboard-fill"></i>  Movies</Link>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-tv-fill"></i>  Tv Shows</Link>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-team-fill"></i>   People</Link>
      </nav>
      <hr className='text-zinc-400 h-1 mt-7 font-bold' />
      <nav className='flex flex-col text-zinc-400 gap-3 font-semibold text-xl'>
       <h1 className='text-white font-semibold  text-xl  mt-10 mb-5'>
           New feeds
       </h1>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-information-fill"></i>  About</Link>
       <Link className='hover:bg-[#6556CD] rounded duration-300 hover:text-white p-2'><i class="ri-phone-fill"></i>  Contact Us</Link>
      </nav>
    </div>


    </>

  )
}

export default Sidebar
