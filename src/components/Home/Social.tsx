import { FC } from "react";

const social: FC = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/aymen-kadri-173083227/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/aymendev8/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/aymenkadri/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram-alt"></i>
      </a>
    </div>
  );
};

export default social;
