import React, {useEffect} from 'react';
import Link from "next/link";


const searchHospital = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "10px",
};

export default function Internship () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showForm = () => {
    document.getElementById("popup-form").style.display = "flex";
  };
  const closeForm = () => {
    document.getElementById("popup-form").style.display = "none";
  };

  return (
    <div
      className="container-fluid"
      style={{
        margin: "80px 0px 0px 0px",
        background: "white",
        padding: "0",
        paddingTop: "80px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        <span className="text-center intern">Internship At College Bucket</span>
        <span className="text-center intern-desc">
          An initiative to improve the health system. Digitally and a very
          handsome way of connecting people to the hospitals. ALWAYS FOR YOUR
          HEALTH.
        </span>
      </div>
      <div className="intern-images"></div>
      <div className="intern-featured" id="intern_program">
        <span className="text-center intern">Internship Program</span>
        <div className="featured-box">
          <div className="left-panel">
            <span className="left-panel-title">
              Students Internship Program
            </span>
            <ul>
              <li>
                A highly nurturing , motivating, autonomous , challenging and a
                healthy environment will be provided.
              </li>
              <li>
                Appreciation of work, flexible work hours, time to time
                evaluation and two ways interaction will be always there.
              </li>
              <li>
                Respectful rewards and perks will be given based on the
                performance and intensity.
              </li>
              <li>
                Last Date Of Submission{" "}
                <span style={{ fontWeight: "bold" }}>
                  10 October, 2020<br></br>
                </span>
                ( If Link is not working{" "}
                <Link href="/contact">
                  <a style={{ color: "#02b3e4" }}>contact us</a>
                </Link>
                )
              </li>
            </ul>
            <button className="btn btn-primary">Not Available</button>
          </div>
          <div className="right-panel"></div>
        </div>
      </div>
      <div className="popup-form" id="popup-form">
        <span className="popup-form-cls" onClick={() => closeForm()}>
          +
        </span>
        <iframe
          src="https://www.youtube.com/watch?v=X7RQmauq-_s&ab_channel=SETIndia"
          className="text-center google-form"
          id="google-form"
        />
      </div>

      {/* <section
        id="Rewards"
        className="home-section paddingtop-10"
        style={{ paddingBottom: "20px", background: "#fafafa" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-sm-3 col-md-3"
              style={{ marginBottom: "70px", marginTop: "50px" }}
            >
              <div className="">
                <div className="box text-center" style={searchHospital}>
                  <img
                    // src={require("./images/diploma.svg")}
                    width="90"
                    style={{ marginBottom: "20px" }}
                  />
                  <h4 className="h-bold">Certificate</h4>
                  <p
                    className="rewards-text"
                    style={{
                      margin: "0",
                      marginTop: "-11px",
                      fontSize: "15px",
                    }}
                  >
                    Letter of Appreciation
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 col-md-3"
              style={{ marginBottom: "70px", marginTop: "40px" }}
            >
              <div className="">
                <div className="box text-center" style={searchHospital}>
                  <img
                    // src={require("./images/reward.svg")}
                    width="90"
                    style={{ marginBottom: "30px" }}
                  />
                  <h4 className="h-bold">Cash Rewards</h4>
                  <p
                    className="rewards-text"
                    style={{
                      margin: "0",
                      marginTop: "-11px",
                      fontSize: "15px",
                    }}
                  >
                    Cash Rewards Upto Rs. 1 Lakh
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 col-md-3"
              style={{ marginBottom: "70px", marginTop: "55px" }}
            >
              <div className="">
                <div className="box text-center" style={searchHospital}>
                  <img
                    // src={require("./images/giftbox.svg")}
                    width="75"
                    style={{ marginBottom: "30px" }}
                  />
                  <h4 className="h-bold">Gift Hampers</h4>
                  <p
                    className="rewards-text"
                    style={{
                      margin: "0",
                      marginTop: "-11px",
                      fontSize: "15px",
                    }}
                  >
                    Watch, Band, Earphone Etc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 col-md-3"
              style={{ marginBottom: "70px", marginTop: "50px" }}
            >
              <div className="">
                <div className="box text-center" style={searchHospital}>
                  <img
                    // src={require("./images/idea.svg")}
                    width="85"
                    style={{ marginBottom: "25px" }}
                  />
                  <h4 className="h-bold">Skill Benefits</h4>
                  <p
                    className="rewards-text"
                    style={{
                      margin: "0",
                      marginTop: "-11px",
                      fontSize: "15px",
                    }}
                  >
                    Level Up Your Skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <span
        className="text-center intern"
        id="intern_reviews"
        style={{ marginTop: "180px" }}
      >
        Intern Reviews
      </span>
      <div className="intern-cards">
        <div className="intern-card">
          <div className="intern-card-image"></div>
          <div className="intern-card-data">
            <p>
              It was great to work with the team, supportive and a very helpful.
              Never let me down in any point of time. And a very friendly
              environment. I learned a lot during the internship period. It was
              a great experience.
            </p>
            <p style={{ marginLeft: "100px" }}>
              Simran Goyal<br></br>- IIT Delhi
            </p>
          </div>
        </div>
        <div className="intern-card">
          <div className="intern-card-image"></div>
          <div className="intern-card-data">
            <p>
              Awesome experience it was to work with these guys. A lots of
              things got to know and a great technical skills the team have.
              They are cooperative and very humble. Just always cool in any
              point of situation.
            </p>
            <p style={{ marginLeft: "100px" }}>
              Naman Garg<br></br>- SRM Institute
            </p>
          </div>
        </div>
        <div className="intern-card">
          <div className="intern-card-image"></div>
          <div className="intern-card-data">
            <p>
              A challenging and very nourishing phase it was. Learned a lot of
              new things and technicalities. This will definitely gonna help me
              in my future . Thanks for such a great opportunity. Also the
              environment was very friendly.
            </p>
            <p style={{ marginLeft: "100px" }}>
              Ankit Goyal<br></br>- Delhi University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
