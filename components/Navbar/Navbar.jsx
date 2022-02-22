import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand logo-image">
              <img src="images/logo.svg" alt="collegeBucket_logo" />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link ">HOME</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/internship">
                  <a className="nav-link ">CAREER</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link ">CONTACT</a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle page-scroll"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  EXTRA
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link href="/termsConditions">
                    <a className="dropdown-item">
                      <span className="item-text">TERMS CONDITIONS</span>
                    </a>
                  </Link>

                  <div className="dropdown-divider"></div>

                  <Link href="/privacyPolicy">
                    <a className="dropdown-item">
                      <span className="item-text">PRIVACY POLICY</span>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
            <span className="nav-item">
              <a
                className="btn-outline-sm page-scroll"
                href="https://play.google.com/store/apps/details?id=com.skywalkers.collegebucket"
              >
                DOWNLOAD
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
