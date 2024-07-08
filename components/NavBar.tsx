"use client";

import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top  mask-custom">
      <div className="container flex-row-reverse d-flex">
        <Link
          title="زهرا رجبی فرجاد"
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="navbar-brand"
        >
          <span style={{ color: "rgba(0, 108, 255, 0.6)" }}>Zahra</span>
          <span style={{ color: "#FF9500" }}> rajabifarjad</span>
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
          className="collapse navbar-collapse justify-content-center flex-row-reverse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                title="خانه"
                to="header"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                title="چرا ما"
                to="why-us"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                چرا ما
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                title="خدمات ما"
                to="services"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                خدمات ما
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                title="سوالات پر تکرار"
                to="faq"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                سوالات پر تکرار
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                title="درباره"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                درباره
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                title="ارتباط با ما"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
