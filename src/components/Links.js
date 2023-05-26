import React from "react";
import '../stylesheets/Links.css';
import '../App.css';

function Links () {
  return(
    <footer id="SocialMedia" className="container-fluid links-container mt-auto">
      <div className="container-fluid">
        <div className="col-sm-12 social-media ">
          <div className="row text-center align-middle">
            <div className="link col-sm-3" >
              <a href="https://github.com/tomyferra" target='_blank' rel='noreferrer' className="social-media-links">
                <i className="bi bi-github"> Github</i>
              </a>
            </div>
            <div className="link col-sm-3" >
              <a href="mailto:ferra.tomy@gmail.com" className="social-media-links">
                <i className="bi bi-envelope"> Email</i>
              </a>
            </div>
            <div className="link col-sm-3">
              <a href="https://wa.me/5491169002457" className="social-media-links">
                <i className="bi bi-whatsapp"> Whatsapp</i>
              </a>
            </div>
            <div className="link col-sm-3">
              <a href='https://www.linkedin.com/in/tomasmariaferrari/' target='_blank' rel='noreferrer' className="social-media-links">
                <i className="bi bi-linkedin"> LinkedIn</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Links;