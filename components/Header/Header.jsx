import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <h1>College Bucket</h1>
                        <p className="p-large p-heading">One place where you get all your college notifications, previous year question papers, notes, viva questions, practical
                        files, and also projects.</p>
                        <a className="btn-solid-lg" href="https://play.google.com/store/apps/details?id=com.skywalkers.collegebucket"><i className="fab fa-google-play"></i>DOWNLOAD</a>
                    </div> 
                </div> 
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="image-container">
                        <img className="img-fluid" src="images/header-iphone.webp" alt="alternative"/>
                    </div> 
                </div>
            </div>
        </div> 
        <div className="deco-white-circle-1">
            <img src="images/decorative-white-circle.svg" alt="alternative"/>
        </div> 
        <div className="deco-white-circle-2">
            <img src="images/decorative-white-circle.svg" alt="alternative"/>
        </div> 
        <div className="deco-blue-circle">
            <img src="images/decorative-blue-circle.svg" alt="alternative"/>
        </div>
        <div className="deco-yellow-circle">
            <img src="images/decorative-yellow-circle.svg" alt="alternative"/>
        </div> 
        <div className="deco-green-diamond">
            <img src="images/decorative-green-diamond.svg" alt="alternative"/>
        </div> 
    </header>
    </div>
  )
}

export default Header;