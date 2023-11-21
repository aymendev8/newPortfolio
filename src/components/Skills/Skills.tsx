import { FC } from "react";
import Fronted from "./Frontend";
import Backend from "./Backend";
import "./Skills.css";

const Skills: FC = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Langages</span>

      <div className="skills__container container grid">
        <Fronted />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
