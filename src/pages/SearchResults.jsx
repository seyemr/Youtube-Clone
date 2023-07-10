import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { options } from "../utlis/contants";
import SideNav from "../components/SideNav";
import VideoCard from "../components/VideoCard";
import loading from "../assets/loading9.gif"

const SearchResults = () => {
    
    const [videos, setVideos] = useState(null);
    // url den arama terrimini alma:
    const [searchParams, setSearchParams] = useSearchParams();
    // get methodu yardımıyla arama terimi alma:
    const query = searchParams.get("search_query");

    console.log("ARAMA TERİMİ", query);

    useEffect(() =>{
      // her aramanın başına videolara null değerini atadık.
      //aşağıdaki sorgu sayesinde nul iken loading bastık.
      setVideos(null);
      //arama terimiyle alakalı videoları çekme
      axios.get(
          `https://youtube138.p.rapidapi.com/search/?q=${query}`,
          options
      )
      .then((res) => setVideos(res.data.contents));
    },[query]);
  
  console.log(videos);
    
  return (
    
    <div className="flex">
      <SideNav/>
      
      <div className="flex p-5 justify-center  w-full">
        {/* videolar yoksa ekrana loading basma */}
        {!videos && (<img className="mx-auto mt-[200px]" src={loading}/>)}
        <div className="flex flex-col gap-20 max-w-[500px]">
          {videos?.map((content, i ) => {
              if(content.type !== "video") return;
              return (<VideoCard key={i} videoInfo={content}/>);
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
