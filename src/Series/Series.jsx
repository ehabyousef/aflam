import React, { useContext, useEffect, useState } from "react";

import { userContext } from "../Context";
import { Link } from "react-router-dom";
import style from "../Home/home.module.css";
import Footer from "../Footer/Footer";

const Series = () => {
  const { trndiTv, TopRatedtv } = useContext(userContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <div id={style.line} className="w-100 position-relative">
              <h2>trending</h2>
              <h2>Tv Shows</h2>
              <h2>To Watch Now</h2>
              <p className="text-white-50">Most Watched Movies By day</p>
            </div>
          </div>
          {trndiTv.map((movie, index) => {
            return (
              <div
                id={style.carrd}
                className="col-md-2 position-relative"
                key={index}
              >
                <div className="content position-relative">
                  <img
                    className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                    alt=""
                  />
                  <Link
                    to={`/Movie/${movie.id}`}
                    id={style.butdetail}
                    className="btn btn-outline-dark"
                  >
                    Movie Details
                  </Link>
                </div>
                <h3>{movie.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="row my-5">
          <div className="col-md-4 d-flex align-items-center">
            <div id={style.line} className="w-100 position-relative">
              <h2>top Rated</h2>
              <h2>Tv Shows</h2>
              <h2>To Watch Now</h2>
              <p className="text-white-50">Most Rated Series All Time</p>
            </div>
          </div>
          {TopRatedtv.map((top, index) => {
            return (
              <div
                id={style.carrd}
                className="col-md-2 position-relative"
                key={index}
              >
                <div className="content position-relative">
                  <img
                    className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/" + top.poster_path}
                    alt=""
                  />
                  <Link
                    to={`/Movie/${top.id}`}
                    id={style.butdetail}
                    className="btn btn-outline-dark"
                  >
                    Movie Details
                  </Link>
                </div>
                <h3>{top.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
