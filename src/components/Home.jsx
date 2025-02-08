import React, { useEffect, useState } from 'react'
import Sidebar from './partials/sidebar'
import TopNav from './partials/TopNav'
import axios from '../utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
const Home = () => {
    document.title  = "Home Page"
    const [wallpaper, setwallpaper] = useState(null)
    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState("all")
  
    const getheaderWallpaper = async ()=>{
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomdata = data.results[(Math.random()* data.results.length).toFixed()]
            setwallpaper(randomdata);
          } catch (error) {
            console.log("Error", error);
          }
    }




    const gettrending = async ()=>{
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results)
        } catch (error) {
            console.log("Error", error);
        }
    }



    
    useEffect(()=>{
        gettrending()
     !wallpaper && getheaderWallpaper()
    },[category])
 
  return wallpaper && trending ? (
    <>
    <Sidebar/>
    <div className='w-[80%] overflow-auto overflow-x-hidden h-full'>
    <TopNav/>
    <Header data={wallpaper}/>
    <div className='p-5 flex justify-between'>
     <h1 className=' text-3xl font-semibold text-zinc-400'>
        Trending
        </h1>
        
        <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e) => setcategory(e.target.value)}/> 

      </div>
    <HorizontalCards data={trending}   />
    </div>
   
    </>
    
  ): <h1 className='text-white'>loading...</h1>
}

export default Home
