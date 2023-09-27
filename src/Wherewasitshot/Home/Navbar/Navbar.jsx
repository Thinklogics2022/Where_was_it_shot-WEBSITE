import React from "react";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Logo from "../../Images/update logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
            <img
              src={Logo}
              alt="Where was it shot"
              className="logo_icon"
              width="240"
              height="50"
              style={{ paddingLeft: "3px" }}
            />
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
                  Home{" "}
                  <HomeIcon className="navIcon" style={{ fontSize: "16px" }} />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Movies{" "}
                  <TheatersIcon
                    className="navIcon"
                    style={{ fontSize: "14px" }}
                  />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Locations{" "}
                  <LocationOnIcon
                    className="navIcon"
                    style={{ fontSize: "16px" }}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About{" "}
                  <InfoIcon className="navIcon" style={{ fontSize: "14px" }} />
                </a>
              </li>

              <li className="nav-item contact">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact{" "}
                  <ContactMailIcon
                    className="navIcon"
                    style={{ fontSize: "15px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
