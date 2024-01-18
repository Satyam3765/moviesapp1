import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTVlMTA2MjU5ZmE1ZGI5NzQ5NzlmZmUxYWQ4MTQ0YyIsInN1YiI6IjYzZjc0ZTVmNDZmMzU0MDA5ZDFhNmRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5SlrviYniEXa2AyPSeafbeLnMOLhKTJ5nSyZmpZYDk";

const headers = {
   // Authorization: "bearer " + TMDB_TOKEN,
    Authorization: "bearer",
};
import { API_Key } from "../Variable/APIkey";
const api = "?api_key=015e106259fa5db974979ffe1ad8144c";

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url+api, {
        
                  headers
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};