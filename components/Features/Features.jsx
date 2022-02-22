import React from 'react'

const Features = () => {
  return (
    <div>
        <div id="features" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Special Features</h2>
                    <p className="p-heading">College Bucket's features are designed to help you improve your time management skills and become a better-organized person. 
                        Organize your tasks, schedule your appointments and meet your personal development goals with College Bucket</p>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-4">
                    <ul className="list-unstyled li-space-lg first">
                        <li className="media">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-users fa-stack-1x"></i>
                            </span>
                            <div className="media-body">
                                <h4>Notes</h4>
                                <p>We are providing you with the best notes from all over the internet</p>
                            </div>
                        </li>
                        <li className="media">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x green"></i>
                                <i className="fas fa-code fa-stack-1x"></i>
                            </span>
                            <div className="media-body">
                                <h4>Important Questions</h4>
                                <p>For the last night fighters and last time revision purpose, we are providing you with the important Question.</p>
                            </div>
                        </li>
                        <li className="media">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x red"></i>
                                <i className="fas fa-cog fa-stack-1x"></i>
                            </span>
                            <div className="media-body">
                                <h4>Previous Year Question Papers</h4>
                                <p>Previous year question papers helps the student to predict the upcoming exams.</p>
                            </div>
                        </li>
                    </ul>
                </div> 
                <div className="col-lg-4">
                    <img className="img-fluid" src="images/features-app.jpeg" alt="alternative"/>
                </div> 
                <div className="col-lg-4">
                    <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x yellow"></i>
                                <i className="fas fa-comments fa-stack-1x"></i>
                            </span>
                            <div className="media-body">
                                <h4>Social Interactions</h4>
                                <p>Schedule your appointments, meetings and periodical evaluations using the tools</p>
                            </div>
                        </li>
                        <li className="media">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x blue"></i>
                                <i className="fas fa-rocket fa-stack-1x"></i>
                            </span>
                            <div className="media-body">
                                <h4>Get Things Done</h4>
                                <p>Reading focus mode for long form articles, ebooks and other materials with long texts</p>
                            </div>
                        </li>
                        <li className="media">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-download fa-stack-1x"></i>
                            </span>
                            <div className="media-body">
                                <h4>Free Downloads</h4>
                                <p>Download the material to read and watch anytime anywhere within the app.</p>
                            </div>
                        </li>
                    </ul>
                </div> 
            </div> 
        </div>
    </div>
    </div>
  )
}

export default Features;