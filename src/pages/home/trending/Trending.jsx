import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
//import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            
                <span className="carouselTitle d-flex justify-content-center pt-5">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            
            <Carousel data={data?.results} loading={loading}  endpoint={endpoint}/>
        </div>
    );
};

export default Trending;
