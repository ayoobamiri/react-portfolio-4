import React from "react";
import Typed from "react-typed";
// import Particles from "react-particles-js";

const Header = () => {
  return (
    
    <div className="header-wrpper">
      <div className="main-info">
        <h1>Web development and web design</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Video Editor"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* Button */}
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
  
    </div>
  );
};

export default Header;
