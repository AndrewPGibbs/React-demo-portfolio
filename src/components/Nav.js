import React from "react";
import image from '../images/touchedupPFP-modified.png';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
  
    <ul className="nav nav-tabs"> 
         <img src={image} id='profilePhoto' alt="headshot of Andrew Gibbs"></img>
      <li className="nav-item">
        
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
