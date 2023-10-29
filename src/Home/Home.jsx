import React, { useContext } from "react";
import { userContext } from "../Context";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
  const { trendMovies, trndiTv } = useContext(userContext);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <div id={style.line} className="w-100 position-relative">
              <h2>trending</h2>
              <h2>Movies</h2>
              <h2>To Watch Now</h2>
              <p className="text-white-50">Most Watched Movies By day</p>
            </div>
          </div>
          {trendMovies.slice(0, 10).map((movie, index) => {
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
                <h3 className="my-2">{movie.title}</h3>
              </div>
            );
          })}

          <Link
            to={`/Movies`}
            className="btn btn-outline-dark w-25 text-white mx-auto my-4"
          >
            show More
          </Link>
        </div>
        <div className="row my-4">
          <div className="col-md-4 d-flex align-items-center">
            <div id={style.line} className="w-100 position-relative">
              <h2>trending</h2>
              <h2>Tv Shows</h2>
              <h2>To Watch Now</h2>
              <p className="text-white-50">Most Watched Tv By day</p>
            </div>
          </div>
          {trndiTv.slice(0, 10).map((tv, index) => {
            return (
              <div
                id={style.carrd}
                className="col-md-2 position-relative"
                key={index}
              >
                <div className="content position-relative">
                  <img
                    className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path}
                    alt=""
                  />
                  <Link
                    to={`/tv/${tv.id}`}
                    id={style.butdetail}
                    className="btn btn-outline-dark"
                  >
                    tv Details
                  </Link>
                </div>
                <h3 className="my-2">{tv.name}</h3>
              </div>
            );
          })}
          <Link
            to={`/series`}
            className="btn btn-outline-dark w-25 text-white mx-auto my-4"
          >
            show More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
