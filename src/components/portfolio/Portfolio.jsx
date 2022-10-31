import React from "react";
import "./portfolio.css";
import PIMG01 from "../../assets/controla01.jpg";
import PIMG02 from "../../assets/todo01.jpg";
import PIMG03 from "../../assets/social_media.jpg";

const projects = [
  {
    id: 1,
    image: PIMG01,
    title: "ControlApp",
    github: "https://github.com/Anderboi/controla-notnext",
    link: "https://anderboi.github.io/controla-notnext/#/projects",
    description:
      "Приложение авторского надзора. Пэт-проект, ведения журнала авторского надзора для архитекторов / дизайнеров. Делается на React, с применением Firebase (авторизация, база данных), TS, MUI, React hook forms.",
  },
  {
    id: 2,
    image: PIMG02,
    title: "ToDoApp on js",
    github: "https://github.com/Anderboi/mb-todo-app",
    link: "https://anderboi.github.io/mb-todo-app/",
    description:
      "ToDo приложение, сделанное как тестовое задание для MindBox, по ТЗ и макету. Сделано на React, с применением typescript, classnames(npm) и добавлением небольшого количества тестов.",
  },
  {
    id: 3,
    image: PIMG03,
    title: "'Samurai' social network",
    github: "https://github.com/Anderboi/react_social",
    link: "https://anderboi.github.io/react_social/",
    description:
      "Учебный проект по React. Небольшая социальная сеть. Функционал не весь, но больше чем в самом курсе.Сам дописывал логику добавления друзей, обмена сообщениями.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <h5 className="sub-subheader">My Recent Projects</h5>
      <h2 className="subheader">Portfolio</h2>

      <div className="container portfolio">
        {projects.map(({ id, title, image, description, github, link }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={`portfolio ${id}`} />
              </div>
              <h3 className="portfolio__item__header">{title}</h3>
              <p className="portfolio__item__description">{description}</p>
              <div className="portfolio__item__button-block">
                <a href={github} className="btn" target="_blanc">
                  Github
                </a>
                <a href={link} className="btn btn-primary" target="_blanc">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
