import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context";
import style from "./Navbar.module.css";
const Navbar = () => {
  let navigate = useNavigate();
  const { userData, setuserData } = useContext(userContext);
  function logOut(e) {
    localStorage.removeItem("userToken");
    setuserData(null);
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark-subtle mb-5">
        <div className="container-fluid d-flex">
          <Link to="/" className="navbar-brand fw-bold fs-3" href="#">
            videoz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {userData ? (
              <ul
                id={style.linkss}
                className="navbar-nav me-auto fs-5 mb-2 mb-lg-0 gap-2"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active position-relative"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active position-relative"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active position-relative"
                    aria-current="page"
                    to="/series"
                  >
                    series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active position-relative"
                    aria-current="page"
                    to="/movies"
                  >
                    Movies
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li
                id={style.con}
                className="nav-item d-flex align-items-center gap-4 me-4 text-dark fs-5"
              >
                <Link to='https://www.facebook.com/profile.php?id=100080623690922' target="_blank">
                  <i className="fab fa-facebook  fs-4"></i>
                </Link>
                <Link to='https://instagram.com/ehab.yousef.66' target="_blank">
                  <i className="fab fa-instagram fs-4"></i>
                </Link>
                <i className="fab fa-tiktok  fs-4"></i>
              </li>
              {userData ? (
                <li className="nav-item">
                  <span
                    onClick={logOut}
                    className="nav-link active "
                    aria-current="page"
                    to="/"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      id={style.log}
                      className="fa-solid fa-arrow-right-from-bracket"
                    ></i>
                  </span>
                </li>
              ) : (
                <ul id={style.linkss} className="d-flex list-unstyled">
                  <li className="nav-item">
                    <Link
                      className="nav-link active position-relative"
                      aria-current="page"
                      to="/register"
                    >
                      register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active position-relative"
                      aria-current="page"
                      to="/login"
                    >
                      Log In
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
