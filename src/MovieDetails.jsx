import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer/Footer";

const MovieDetails = () => {
  const [ItemDetails, setItemDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function getTranding() {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=282b5f398ae39b2405b8da1920eccea2`
      );
      setItemDetails(data);
      console.log(data);
    }
    getTranding();
  }, [id]);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center pb-3">
        <div style={{ backgroundColor: "#2a9d8f" }} class="card w-50">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + ItemDetails.poster_path}
            height="500px"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5
              style={{ color: "#e9c46a" }}
              class="card-title fs-4 fw-bolder p-2"
            >
              {ItemDetails.title}
            </h5>
            <p className="card-text fs-4 fw-bold ">
              <span className="fw-bolder fs-4 ">
                Movie Popularity:
                <span
                  style={{ color: "#f4a261" }}
                  className="fw-bolder fs-4 p-3"
                >
                  {ItemDetails.overview}
                </span>
              </span>
            </p>
            <p className="card-text fs-4 fw-bold ">
              <span className="fw-bolder fs-4 ">
                Movie Popularity:
                <span
                  style={{ color: "#f4a261" }}
                  className="fw-bolder fs-4 p-2"
                >
                  {ItemDetails.vote_average}
                </span>
              </span>
            </p>
            <p className="card-text fs-4 fw-bold ">
              vote_average :
              <span
                style={{ color: "#f4a261" }}
                className="fw-bolder fs-4 p-2 "
              >
                {ItemDetails.vote_average}
              </span>
            </p>
            <p className="card-text fs-4 fw-bold ">
              vote_count :
              <span style={{ color: "#f4a261" }} className="fw-bolder fs-4 p-2">
                {ItemDetails.vote_count}
              </span>
            </p>
            <Link to="/home" className="btn btn-outline-dark text-white fs-5">
              Go back
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
