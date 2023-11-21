import { FC } from "react";

const Info: FC = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-university"></i>
        <h3 className="about__title">Etudes</h3>
        <span className="about__subtitle">L3</span>
      </div>
      <div className="about__box">
        <i className="uil uil-check-circle"></i>
        <h3 className="about__title">Alternance</h3>
        <span className="about__subtitle">oui</span>
      </div>
      <div className="about__box">
        <i className="uil uil-calendar-alt"></i>
        <h3 className="about__title">Disponibilité</h3>
        <span className="about__subtitle">24/7</span>
      </div>
    </div>
  );
};

export default Info;
