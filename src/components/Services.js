import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faFileCode,
  faMobile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            {/*  */}
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                Your web site will be build with an new proven technologies.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faMobile} size="2x" />
              </div>
              <h3>Mobile App</h3>
              <p>Your App will be build with an new proven technologies.</p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faVideo} size="2x" />
              </div>
              <h3>Video Editing</h3>
              <p>I love video editing. It's one of my favorite parts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
