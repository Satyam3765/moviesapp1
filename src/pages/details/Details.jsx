import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
//import DetailsBanner from "./detailsBanner/DetailsBanner";
//import Cast from "./cast/Cast";
//import VideosSection from "./videosSection/VideosSection";
//import Similar from "./carousels/Similar";
//import Recommendation from "./carousels/Recommendation";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = ({showFooter,setShowFooter}) => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
    const {bannerData,setBannerData} =  useState(null);
     
      //var x;
       useEffect(
        ()=>{

            // setTimeout(()=>{

            //   //  x = data.results[0];
            //     console.log(data);
            // },)
           
           // setShowFooter(true);
              setShowFooter(true);
            console.log(showFooter);
            console.log(data);
            console.log(id);
        }
       )
       
    //  console.log(x);
    
    return (
        <div>
           
             <DetailsBanner vid={data}/>
           {/* <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} /> */}
        
               {/* <h1 style={{color:"orange"}}>hello how are you</h1> */}
        </div>
    );
};

export default Details;


