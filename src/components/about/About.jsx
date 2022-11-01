import React from "react";
import "./about.css";
import Portrait from "../../assets/portrait.png";
import { IoLanguage } from "react-icons/io5";

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
              <IoLanguage className="about__card__icon" />
              <h5>Russian</h5>
              <div className="about__card__small">
                <h5>Native</h5>
              </div>
            </div>
            <div className="about__card">
              <IoLanguage className="about__card__icon" />
              <h5>English</h5>
              <div className="about__card__small">
                <h5>C1 Advanced</h5>
              </div>
            </div>
          </div>
          <p className="about__content__text">
            My goal is to become a frontend developer as soon as possible, to
            work remotely and enjoy my activities. <br />
            <br />
            <strong>Strengths:</strong> perseverance, stress resistance, focus
            on results. <br />
            <br />
            Ability to work both in a team and independently. Find answers to
            any question (Google and knowledge of English helps). <br />
            <br />I have no development experience. I am an architect with more
            than 10 years of experience. I designed buildings and structures. I
            became an interior designer. <br />
            <br />
            In 2019 , I enrolled in the course "Game Project Management . I have
            studied many interesting and new disciplines, what prompted me to
            study further
            <strong> HTML, CSS and JS (Skillbox, youtube, web)</strong>. <br />
            <br />
            Then I started looking for my first framework. I started studying
            <strong>VUE</strong>, but I didn't have enough fundamental knowledge
            (flux, state management). <br />I switched to <strong>React</strong>
            , there was much more information on it. <br />
            <br />
            I've completed the
            <strong>
              <a
                className="link"
                href="https://ylab.io/upload/certificates/reactjs/SCIZoXcJ2Zhgnmd7DsNs.pdf"
                target="_blanc"
              >
                {` Ylab React course`}
              </a>
            </strong>
            . <br />I am currently taking the
            <strong>{` RSSchool (from EPAM)`}</strong> course. <br />
            <br />I devote 3-5 hours a day for learning. I strive to look for
            up-to-date information (for example, I started with studying redux,
            but also reviewed the redux toolkit, used bootstrap and MUI. I've
            been working on BEM lately).
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's discuss
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
