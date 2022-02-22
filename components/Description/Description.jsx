import React from 'react'

const Description = () => {
  return (
    <div>
        <div className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                
                    <div className="card">
                        <div className="card-image">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">128+ GJU Alumni</h5>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image green">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Solutions from 10+ Gold Medalist</h5>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="card-image red">
                            <i className="fas fa-cog"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Proper Structure</h5>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="card-image yellow">
                            <i className="fas fa-comments"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Social Interaction & Support</h5>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-image blue">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Take your career to the next level</h5>
                        </div>
                    </div>
                    

                </div> 
            </div> 
        </div> 
    </div> 


   
    <div id="description" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src="images/description-1-app.webp" alt="alternative"/>
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Take your career to the next level</h2>
                        <p>College Bucket helps you to find the best Notes, Books, Lectures on one platform. Also helps you to make the connection with alumni.</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">We will provide you best college materials</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Best career advice from 200+ Mentors across the world.</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Best internships and job opportunities</div>
                            </li>
                        </ul>
                        <a className="btn-solid-reg popup-with-move-anim" href="#description-1-details-lightbox">See More</a>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>

    
   
	<div id="description-1-details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
			<div className="col-lg-8">
                <div className="image-container">
                    <img className="img-fluid" src="images/description-1-details-lightbox.webp" alt="alternative"/>
                </div> 
			</div>
			<div className="col-lg-4">
                <h3>Goals Settings</h3>
				<hr/>
                <p>The app can easily help you to manage all your Notes and Books in one place</p>
                <h4>User Feedback</h4>
                <p>This is a great app that can help you save time and make your live easier. And it will help improve your productivity.</p>
                <ul className="list-unstyled li-space-lg">
                    <li className="media">
                        <i className="far fa-check-square"></i><div className="media-body">Latest Notifications</div>
                    </li>
                    <li className="media">
                        <i className="far fa-check-square"></i><div className="media-body">Notes</div>
                    </li>
                    <li className="media">
                        <i className="far fa-check-square"></i><div className="media-body">Previous years Question Papers</div>
                    </li>
                    <li className="media">
                        <i className="far fa-check-square"></i><div className="media-body">Practical Files</div>
                    </li>
                    <li className="media">
                        <i className="far fa-check-square"></i><div className="media-body">Rewards on sharing</div>
                    </li>
                </ul>
                <a className="btn-solid-reg mfp-close page-scroll" href="https://play.google.com/store/apps/details?id=com.skywalkers.collegebucket">DOWNLOAD</a> <button className="btn-outline-reg mfp-close as-button" type="button">BACK</button>
			</div>
		</div> 
    </div> 
    </div>
  )
}

export default Description;