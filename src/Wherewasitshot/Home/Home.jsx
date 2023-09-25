import React from "react";
import "./Home.css";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b> Home</b> <HomeIcon className="navIcon" style={{ fontSize: '16px' }}/>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b> Movies</b> <TheatersIcon className="navIcon" style={{ fontSize: '14px' }}/>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b> Locations</b> <LocationOnIcon className="navIcon" style={{ fontSize: '16px' }}/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b> About</b> <InfoIcon className="navIcon"  style={{ fontSize: '14px' }}/>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b> Contact</b> <ContactMailIcon className="navIcon" style={{ fontSize: '15px' }}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div classNameName="good">hii</div>

    </div>
  );
};

export default Home;
