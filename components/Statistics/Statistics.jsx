import React from 'react'

const Statistics = () => {
  return (
    <div>
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="counter">
                <div className="cell">
                  <i className="fas fa-users"></i>
                  <div className="counter-value number-count" data-count="640">
                    1
                  </div>
                  <p className="counter-info">Happy Users</p>
                </div>
                <div className="cell">
                  <i className="fas fa-code green"></i>
                  <div className="counter-value number-count" data-count="132">
                    1
                  </div>
                  <p className="counter-info">Subjects Covered</p>
                </div>
                <div className="cell">
                  <i className="fas fa-cog red"></i>
                  <div className="counter-value number-count" data-count="159">
                    1
                  </div>
                  <p className="counter-info">Good Reviews</p>
                </div>
                <div className="cell">
                  <i className="fas fa-comments yellow"></i>
                  <div className="counter-value number-count" data-count="127">
                    1
                  </div>
                  <p className="counter-info">Case Studies</p>
                </div>
                <div className="cell">
                  <i className="fas fa-rocket blue"></i>
                  <div className="counter-value number-count" data-count="211">
                    1
                  </div>
                  <p className="counter-info">Paid Subscriptions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="download" className="basic-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/download-iphone.webp"
                  alt="alternative"
                />
              </div>
              <p className="p-large">
                Do you feel like you're wasting time with small stuff instead of
                working towards your goals? Start using College Bucket to
                organize your time and get a grip on your educational and
                learning
              </p>
              <a
                className="btn-solid-lg"
                href="https://play.google.com/store/apps/details?id=com.skywalkers.collegebucket"
              >
                <i className="fab fa-google-play"></i>DOWNLOAD
              </a>
            </div>
          </div>
        </div>
        <div className="deco-white-circle-1">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>
        <div className="deco-white-circle-2">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>
        <div className="deco-blue-circle">
          <img src="images/decorative-blue-circle.svg" alt="alternative" />
        </div>
        <div className="deco-yellow-circle">
          <img src="images/decorative-yellow-circle.svg" alt="alternative" />
        </div>
        <div className="deco-green-diamond">
          <img src="images/decorative-green-diamond.svg" alt="alternative" />
        </div>
      </div>
    </div>
  );
}

export default Statistics;

