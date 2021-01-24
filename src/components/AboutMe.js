import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="me" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 mt-5">
          <h1 className="about-heading ">ABOUT ME</h1>
          <p>
            Since beginning my journey as a freelance four years ago, I've done
            remote work for agencies, consulted for startups, and collaborated
            with talented people to create digital products for both business
            and consumer use. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one design problem at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
