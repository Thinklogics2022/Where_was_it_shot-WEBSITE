import React from "react";
import Header1 from "../Images/header1.jpg";
import Header2 from "../Images/header05.jpg";
import Header3 from "../Images/header02.jpg"
import Navbar from "./Navbar/Navbar";
import './Carousel.scss'

const Carousel = () => {
  return (
    <>
    <Navbar/>
      <div className="carousel">
      <div className="explore-text">
          <p className="explorepp">Explore your favorite movie / location</p>
        </div>
        <div className="search-bar">
          <div className="search-bar-inner">
            <input type="text" placeholder="Search..." />
            <a className="search-button" href="#">
              <p className="searchbtn"> Search</p>
            </a>
          </div>
        </div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={Header1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={Header3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Header2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
