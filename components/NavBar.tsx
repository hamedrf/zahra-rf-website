import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top  mask-custom">
      <div className="container flex-row-reverse d-flex">
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
        <div
          className="collapse navbar-collapse justify-content-center flex-row-reverse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" title="چرا ما" href="#!">
                چرا ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="خدمات ما" href="#!">
                خدمات ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="سوالات پر تکرار" href="#!">
                سوالات پر تکرار
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="درباره" href="#!">
                درباره
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="ارتباط با ما" href="#!">
                ارتباط با ما
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" title="" href="#!">
                <i className="fas fa-shopping-cart">11</i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" title="" href="#!">
                <i className="fab fa-twitter">1</i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" title="" href="#!">
                <i className="fab fa-instagram">1</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
