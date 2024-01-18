import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

//import { useSelector, useDispatch } from "react-redux";
//import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { API_Key } from "./Variable/APIkey";

import Homes from "./pages/home/Home";
//import { getApiconfig } from "./Actions/Actions";
//import { getGenress } from "./Actions/Actions";
import Details from "./pages/details/Details";
import Registers from "./pages/register/Register";
 export var base_url = "";
 export const base = base_url;
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Logins from "./pages/login/Login";
function App() {
  //  const dispatch = useDispatch();
    //  const { url } = useSelector((state) => state.home);
    //  console.log(url);
       const [showFooter,setShowFooter] = useState(false);
    useEffect(() => {
        //fetchApiConfig();
       // console.log("hi");
        setShowFooter(true);
       // genresCall();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
           // debugger
         //  console.log(res);
                base_url = res.images.secure_base_url + "original";
                console.log(base_url);
            // const url = {
            //     backdrop: res.images.secure_base_url + "original",
            //     poster: res.images.secure_base_url + "original",
            //     profile: res.images.secure_base_url + "original",
            // };

           // dispatch(getGenress);
        

        });
    };

   
    return (
      <div>

        
        <BrowserRouter>
            <Header/>
            <Routes>
                {/* <Route path="/" element={<Registers/>} /> */}
                <Route path="/" element={<Registers/>} />
                <Route path="/login" element={<Logins/>} />
                <Route path="/home" element={<Homes/>} />
                <Route path="/:mediaType/:id" element={<Details showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
                 </Routes>
              <Footer showFooter={showFooter} setShowFooter={setShowFooter}/>
        </BrowserRouter>
        </div>
    );
}

export default App;
