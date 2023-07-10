import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utlis/contants'
import ReactPlayer from 'react-player'
import loading from "../assets/loading9.gif"
import { AiFillLike } from "react-icons/ai"
import { RiDislikeLine, RiShareForwardLine } from "react-icons/ri"
import millify from 'millify'
import VideoCard from '../components/VideoCard'
import StringArea from "../components/StringArea"

const VideoDetail = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [relatedContent, setRelatedContent] = useState(null);

  useEffect(() => {
    // kullanıcı alakalı videolardan birine tıklarsa 
    // loading gösterebilmek için null'a çektik
    setDetails(null);
    setRelatedContent(null);
    // videonun idsine göre detaylarının bilgisiini çek
    axios.get(
      `https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`,
      options
    )
      .then((res) => setDetails(res.data));
    // videoya benzer diğer alakalı diğer videoları çekme
    axios.get(
      `https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`,
      options
    )
      .then((res) => setRelatedContent(res.data.contents));
      //! bağımlılık olarak useParamsdan gelen videonun id sini ekledik
      //! alakalı videolardan birine tıklanırsa onun verisini çekmek iistiyoruz
  }, [params.videoId]);

  return (
    <div >
      {/*details değeri nul iken ekrana loading basma */}
      {!details && (<img className='m-auto mt-[300px]' src={loading} />)}

      {
        details && (
          <div className='flex flex-col lg:flex-row lg:justify-center gap-5 p-3 sm:p-5 md:p-12 '>
            {/*Ana İçerik */}
            <div className='flex flex-col items-center lg:max-w-[900px]'>
              <ReactPlayer
                width={"100%"}
                url={`https://www.youtube.com/watch?v=${details.videoId}`}
                controls
                playing={true}
              />
              <div className='flex flex-col gap-5 mt-5'>
                <h2>{details?.title}</h2>
                <div className='flex justify-between'>
                  {/*Kanal hakkında bilgiler */}
                  <div className='flex gap-4 items-center'>
                    <img className='w-[48px] h-[48px] rounded-full' src={details?.author?.avatar[0]?.url} />
                    <div>
                      <p>{details.author.title}</p>
                      <p>{details.author.stats.subscribersText}</p>
                    </div>
                    <button className='bg-white text-black rounded-lg p-1 hover:bg-gray-700 hover:text-white'>Abone Ol</button>
                  </div>
                  {/*Video hakkında bilgiler */}
                  <div className='flex gap-5'>
                    <div className='flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700'>
                      <AiFillLike />
                      <span>{millify(details.stats.likes)}</span>
                    </div>
                    <div className='flex items-center gap-3  bg-gray-800 rounded p-3 cursor-pointer  hover:bg-gray-700'>
                      <RiShareForwardLine />
                      <span>Paylaş</span>
                    </div>
                  </div>
                </div>
                <div>
                  {/*Video Hakkında kısmı */}
                  <div className='bg-gray-600 rounded p-4'>
                    <p className='flex gap-5 mb-3'>
                      <span>{millify(details.stats.views)} kez izlendi</span>
                      <span>{details.publishedDate} Tarihinde Yayınlandı</span>
                    </p>
                    <p>
                      <StringArea text={details.description} max={200}/>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            {/*Alakalı içerik */}
            <div className='flex flex-col gap-5 lg:max-w-[300px] related'>
              {!relatedContent && <p>Loading...</p>}
              {relatedContent && relatedContent.map((video, i ) => {
                if (video.type !== "video") return;
                return (<VideoCard key={i} videoInfo={video} />)
              })}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default VideoDetail;
