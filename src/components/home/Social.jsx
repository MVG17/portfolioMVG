import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/mvg004/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      {/* <a href="" className="home__social-icon" target="_blank">
        <i className="uil uil-dribbble"></i>
      </a> */}
      <a
        href="https://github.com/MVG17"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;