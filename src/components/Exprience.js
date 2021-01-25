import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2007-2011</h3>
            <p>
              Worked and collaborated with graphic designer team. Created and
              designed programs TV intro, news intro, news, and annually
              reports. Developed and managed music and cultural TV programs.
              Customized and developed website and collaborated with developer
              department.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2015</h3>
            <p>
              Worked as video editor and UI designer. Designed, created, and
              modified promotional video and audio clips. Collaborated with
              graphic design team and developers. Designed CIED (Billboard
              Design and Print) (Posters, Pamphlets and Trifold). Designed all
              Posters and Banners for AWDP. Customized and developed website.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-Present</h3>
            <p>
              Created websites and landing pages for NWCUYC, repair and fix.
              Used HTML, CSS, JavaScript, React Js, Bootstrap, and Wordpress.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-Present</h3>
            <p>
            Designing, updating, establishing, and developing user friendly website.
 Providing sufficient training to staff members in internal web function.
            </p>
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  );
};

export default Experience;
