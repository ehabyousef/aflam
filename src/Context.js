import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let userContext = createContext();
const Context = (props) => {
  const [userValues, setuserValues] = useState([]);
  const [userData, setuserData] = useState(null);
  //user sign
  const getUser = async () => {
    let { data } = await axios.get("http://localhost:1000/posts");
    setuserValues(data);
  };
  // get data from localstorage
  function getUserData() {
    let data = localStorage.getItem("userToken");
    setuserData(data);
  }
  //get movies data from api
  const [trendMovies, settrendMovies] = useState([]);
  const [trndiTv, settrndiTv] = useState([]);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);
  const [TopRatedtv, setTopRatedtv] = useState([]);
  async function getTopRated(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=282b5f398ae39b2405b8da1920eccea2`
    );
    callback(data.results);
  }
  async function getTranding(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=282b5f398ae39b2405b8da1920eccea2`
    );
    callback(data.results);
  }

  useEffect(() => {
    getUserData();
    getUser();
    getTranding("movie", settrendMovies);
    getTranding("tv", settrndiTv);
    getTopRated("movie", setTopRatedMovie);
    getTopRated("tv", setTopRatedtv);
  }, [userData]);

  return (
    <div>
      <userContext.Provider
        value={{
          userValues,
          userData,
          setuserData,
          getUserData,
          trendMovies,
          trndiTv,
          TopRatedMovie,
          TopRatedtv,
        }}
      >
        {props.children}
      </userContext.Provider>
    </div>
  );
};

export default Context;
