import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.jpg";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(
    () => {
      GetSearches();  
    },
    [query]
  );

  return (
    <div className="w-[80%] h-[10vh]  pb-10 pt-5 items-center flex justify-center  relative ">
      <i class="absolute left-[21%]   ri-search-line text-zinc-200  mt-8  text-2xl " />
      <input
        onChange={e => setquery(e.target.value)}
        value={query}
        className="bg-transparent relative text-white w-[50%] mx-10 mt-8 outline-none border  rounded-full  px-5 py-2 text-xl"
        type="text"
        placeholder="Search anything "
      />
      {query.length > 0 &&
        <i
          onClick={() => {
            setquery("");
          }}
          class="ri-close-fill absolute right-[26%] text-zinc-400  mt-8  text-3xl  "
        />}

      <div className="absolute left-[25%]  justify-start rounded w-[50%] max-h-[50vh] overflow-auto  bg-zinc-200 top-[110%]">
        {searches.map((s, i) =>
          <Link
            key={i}
            className="hover:text-black  hover:bg-zinc-300 duration-300   gap-10 text-zinc-600 font-semibold flex justify-start border-b-2 border-zinc-100 items-center   w-[100%] p-6"
          >
            <img
              className="w-[10vh] rounded shadow-lg h-[10vh] object-cover"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original${s.backdrop_path ||
                      s.profile_path}`
                  : noimage
              }
              alt=""
            />
            <span className="text-lg ">
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopNav;
