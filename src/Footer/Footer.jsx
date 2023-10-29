import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid p-4 mt-1 border-top">
        <div className="d-flex justify-content-between mx-0 px-3">
          <span className="fs-4">2023 &copy; All Right Reserved</span>
          <span className="fs-4">Build with Love 💖 by Ehab</span>
          <span className="fs-4 d-flex gap-3">
            <Link id={Style.link} to={"/about"}>
              About
            </Link>
            <Link id={Style.link} to={"/contact"}>
              Contact
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
