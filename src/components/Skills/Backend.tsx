import { FC } from "react";

const Backend: FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technos</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">GIT</h3>
              <span className="skills__level">Avancé</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Symfony</h3>
              <span className="skills__level">Avancé</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intérmédiaire</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intérmédiaire</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Data avec Python</h3>
              <span className="skills__level">Intérmédiaire</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">UML</h3>
              <span className="skills__level">Intérmédiaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
