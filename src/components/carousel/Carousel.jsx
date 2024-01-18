import React, { useRef } from "react";
 import "./style.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsBootstrap } from "react-icons/bs";
//import { useSelector } from "react-redux";
//import dayjs from "dayjs";

//import ContentWrapper from "../contentWrapper/contentWrapper.Jsx";
//import Img from "../lazyLoadImage/Img";
//import PosterFallback from "../../assets/no-poster.png";
//import { Container,Col,Row } from "react-dom";
import { Row, Container, Col } from "react-bootstrap";
//import "src/components/carousal/node_modules/bootstrap/dist/css/bootstrap.min.css";
import CircleRating from "../circleRating/CircleRating";
//import Genres from "../genres/Genres";

//import "./style.scss";
 const base_UR = "https://image.tmdb.org/t/p/original";
const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  // const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div className="carousel">
        {/* <ContentWrapper> */}
        {title && <div className="carouselTitle">{title}</div>}
        <div class="arrow1">
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
         </div>
         <div class="arrow2">
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
       </div>
        {!loading ? (
        
            <div className="carouselItems card-container" ref={carouselContainer}>
              {data?.map((item) => {
                // const posterUrl = item.poster_path
                //     ? url.poster + item.poster_path
                //     : PosterFallback;
                const posterURL = base_UR+item.poster_path;
                console.log(item.poster_path)
                return (
                
                    <div class= "example-card">
                      <div
                        key={item.id}
                        className="carouselItem"
                        onClick={() =>
                          navigate(`/${item.media_type || endpoint}/${item.id}`)
                        }
                      >
                        <div className="posterBlock">
                           <img src= {posterURL} class="rowing poster"/>
                          <CircleRating 
                                              rating={item.vote_average.toFixed(
                                                  1
                                              )}
                                          />
                          {/* <Genres
                                              data={item.genre_ids.slice(0, 2)}
                                          /> */}
                        </div>
                        <div className="textBlock">
                          <span className="title">
                            {item.title || item.name}
                          </span>
                          <span className="date">
                             {/* {dayjs(item.release_date || item.first_air_date).format(
                                                  "MMM D, YYYY"
                                              )}  */}
                          </span>
                        </div>
                      </div>
                    </div>
                  
                );
              })}
            </div>
          
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
        {/* </ContentWrapper> */}
      </div>
    </Container>
  );
};

export default Carousel;
