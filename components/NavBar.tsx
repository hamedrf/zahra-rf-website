import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <span style={{ color: "#A3D2A1" }}>Zahra</span>
          <span style={{ color: "#FFA07A" }}> rajabifarjad</span>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                درباره
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                چرا ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                سوالات پر تکرار
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                خدمات ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                ارتباط با ما
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
