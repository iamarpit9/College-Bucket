import React from "react";

const Footer = () => {
  return (
    <div>
      

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-col first">
                <h5>About College Bucket</h5>
                <p className="p-small">
                  One Bucket in which every college is present. Get Syllabus,
                  Notes, Notifications etc on one platform.
                </p>
              </div>
              <div className="footer-col second">
                <h5>Contact Info</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li className="media">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="media-body">#2102, Sector 14, Hissar</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-envelope"></i>
                    <div className="media-body">
                      <a href="#your-link">contact@collegebucket.com</a>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-phone-alt"></i>
                    <div className="media-body">
                      <a href="#your-link">+91 8222001110</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="footer-col third">
                <h5>Value Links</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li>
                    <a href="terms-conditions.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col fifth">
              <span className="fa-stack">
                <a href="https://www.facebook.com/collegebucket">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://www.instagram.com/collegebucket/">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://www.youtube.com/channel/UC-gs83Zhpg8jfpX3pMQPD5A">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright © 2022{" "}
                <a href="https://www.collegebucket.com">College Bucket</a> - All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
