import useFetch from "../../../hooks/useFetch.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { Row, Container, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_url} from "../../../App.jsx";
import CircleRating from "../../../components/circleRating/CircleRating.jsx";
import "./style.scss";
import Video from "../../../components/videoPopup/VideoPop.jsx";
import PlayIco from "../Playbtn.jsx";
//import Foot from "../../../Variable/FooterVariable.js";
const v = "https://image.tmdb.org/t/p/original";
const DetailsBanner = ({vid}) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
   // const [showFooter, setShowFooter] = useState(false);
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);
        
    //    useEffect(()=>{

    //      setShowFooter(true)
    //      console.log(showFooter);
    //      //Foot=true;
    //      //console.log( "imported Variable",Foot)
    //    })


    //const { url } = useSelector((state) => state.home);
          console.log(data);
         // console.log(vid?.results[0].key);
          console.log(show);
    const _genres = data?.genres?.map((g) => g.id);
        console.log(videoId);
    // const director = crew?.filter((f) => f.job === "Director");
    // const writer = crew?.filter(
    //     (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    // );
      // console.log(vid?.results[0]);
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
     return(
         <div className="detailsBanner">
             {/* <div className ="back-image">
        <img src={v + data?.backdrop_path}/>
        </div> */}
         <Row className="content">
        
             <Col md={6} sm={12} className="card left border-0">
              
     

                   {
                    data?.poster_path?(
                        <img
                        className="posterImg"
                        src={
                               v +
                            data?.poster_path
                        }
                    />
                     ):
                     (
                        <img className="posterImg"
                        src={PosterFallback}></img>
                     )



                   }
            
                      
             </Col>
            <Col className="right">
                  {/* <h1 style={{opacity:"01"}}>Hi</h1> */}
                  <div className="title">
                                            {`${
                                             data?.original_title
                                            } `}
                                        </div>
                                        <div className="subtitle">
                                            {data?.tagline}
                                        </div>
                                        <div className="row">
                                            <CircleRating
                                                rating={data?.vote_average.toFixed(
                                                    1
                                                )}
                                            />
                                            <div
                                                className="playbtn"
                                                onClick={() => {
                                                    setShow(true);
                                                    setVideoId(vid?.results[0].key);
                                                }}
                                            >
                                                 <button className="btn btn-primary">Watch Trailor</button>
                                                {/* <span className="text">
                                                    Watch Trailer
                                                </span> */}
                                            </div>
                                        </div>
            </Col>
           </Row>
                           <Video
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId}
                                />

                                <div>
                                    <h1>Details Banner</h1>
                                </div>
            </div>
          
     )

     }
export default DetailsBanner;



