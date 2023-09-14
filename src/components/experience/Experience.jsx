import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiAdobephotoshop,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";
import {IoLogoSass} from 'react-icons/io';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h5 className="sub-subheader">What Skills I Have</h5>
      <h2 className="subheader">My Stack</h2>

      <div className="container experience">
        <div className="experience__frontend">
          <h3 className="experience__frontend__header">Fronend Development</h3>
          <div className="skills">
            <article className="skills__item">
              <SiHtml5 className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <SiCss3 className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <IoLogoSass className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Sass</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <SiJavascript className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <SiTypescript className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>TypeScript</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article>
            <article className="skills__item">
              <SiReact className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <TbBrandNextjs className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Next JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <SiRedux className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Redux/Zustand</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__item">
              <SiTailwindcss className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <SiSupabase className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Supabase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__item">
              <SiFigma className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__item">
              <SiAdobephotoshop className="skills__item__icon" />
              <div className="skills__item__desc">
                <h4>Photoshop</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
