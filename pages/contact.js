import React from 'react'

function Contact() {
  return (
    <div>
      {" "}
      <div className="intern-featured" id="intern_program">
        <span className="text-center intern">Contact Us</span>
        <div className="featured-box">
          <div className="left-panel">
            <span className="left-panel-title">Contact Info</span>
            <ul>
              <div className="footer-col second">
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
            </ul>
            <div className="footer-col fifth">
              <span className="fa-stack">
                <a href="https://www.facebook.com/collegebucket" target="_blank">
                  <i className="fas fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-2x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://www.instagram.com/collegebucket/" target="_blank">
                  <i className="fas fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-2x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://www.youtube.com/channel/UC-gs83Zhpg8jfpX3pMQPD5A" target="_blank">
                  <i className="fas  fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-2x"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="right-panel-contact"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;