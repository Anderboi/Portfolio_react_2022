import React from "react";
import "./about.css";
import Portrait from "../../assets/portrait.png";
import {BiAward} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about" className="section">
      <h5 className="sub-subheader">Get To Know</h5>
      <h2 className="subheader">About Me</h2>

      <div className="container about">
        <article className="about__me">
          <div className="about__me__image">
            <img src={Portrait} alt="Portrait" />
          </div>
        </article>
        <article className="about__content">
          <div className="about__content__cards">
            <div className="about__card">
              <BiAward className="about__card__icon"/>
              <h5>Experience</h5>
              <div className="about__card__small">
              <small>No experience</small><br/>
              <small>In progress ...</small>
              </div>
            </div>
            <div className="about__card">
              <BiAward className="about__card__icon"/>
              <h5>Experience</h5>
              <small className="about__card__small">No experience</small><br/>
              <small className="about__card__small">In progress ...</small>
            </div>
            <div className="about__card">
              <BiAward className="about__card__icon"/>
              <h5>Experience</h5>
              <small className="about__card__small">No experience</small><br/>
              <small className="about__card__small">In progress ...</small>
            </div>
          </div>

          <p className="about__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates mollitia dolores ipsam molestias nobis repellendus quis culpa neque, blanditiis ducimus itaque facilis sapiente maxime recusandae doloremque dolore quam sit?</p>

          <a href="#contacts" className="btn btn-primary">Let's discuss</a>
        </article>
      </div>
    </section>
  );
};

export default About;
