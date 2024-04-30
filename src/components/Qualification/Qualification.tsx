import { FC, useState } from "react";
import "./qualification.css";

const Qualification: FC = () => {
  const [Toggle, setToggle] = useState(1);
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Mon Parcours</h2>
      <span className="section__subtitle">Formations et stage </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              Toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggle(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Parcours scolaire
          </div>
          <div
            className={
              Toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggle(2)}
          >
            <i className="uil uil-briefcase qualification__icon"></i> Parcours
            professionnel
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              Toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => setToggle(1)}
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Ingenieur Informatique - Big Data & Machine Learning
                </h3>
                <span className="qualification__subtitle">
                  EFREI Paris - Ecole d'ingénieur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> septembre 2024 - juin
                  2026
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Licence informatique</h3>
                <span className="qualification__subtitle">
                  Université catholique de Lille
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> septembre 2021 - juin
                  2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bacalauréat</h3>
                <span className="qualification__subtitle">
                  Lycée Lyautey Casablanca
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2021
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              Toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => setToggle(2)}
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Freelance pour WSP </h3>
                <span className="qualification__subtitle">
                  développement et deployement du site web de l'entreprise{" "}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> aout 2023 - novembre
                  2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Alternance</h3>
                <span className="qualification__subtitle">
                  Intelligent Video Software - developpeur fullstack
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> septembre 2023 -
                  septembre 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Stage de développeur </h3>
                <span className="qualification__subtitle">HPS - Maroc</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mai 2022 - juin 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
