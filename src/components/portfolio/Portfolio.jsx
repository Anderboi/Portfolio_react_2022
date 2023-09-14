import React from "react";
import PIMG01 from "../../assets/controla01.jpg";
import PIMG02 from "../../assets/todo01.jpg";
import PIMG03 from "../../assets/social_media.jpg";

const projects = [
  {
    id: 1,
    image: PIMG01,
    title: "Controla",
    github: "https://github.com/Anderboi/Controla_2023/tree/main",
    link: "https://controla-amber.vercel.app",
    description_ru:
      "Приложение авторского надзора. Пэт-проект, ведения журнала авторского надзора для архитекторов / дизайнеров. Делается на Next js, с применением Supabase (авторизация, база данных), TS, Tailwind, Zustand, React hook forms.",
    description:
      "Application for interior project management. Pet Project, maintaining a journal of author's supervision and project manegement for designers. It is done with Next js, using Supabase for authorization and database, TS, Tailwind, Zustand, React hook forms.",
  },
  {
    id: 2,
    image: PIMG01,
    title: "ControlApp",
    github: "https://github.com/Anderboi/controla-notnext",
    link: "https://anderboi.github.io/controla-notnext/#/projects",
    description_ru:
      "Приложение авторского надзора. Пэт-проект, ведения журнала авторского надзора для архитекторов / дизайнеров. Делается на React, с применением Firebase (авторизация, база данных), TS, MUI, React hook forms.",
    description:
      "Application of author's supervision. Pet Project, maintaining a journal of author's supervision for architects / designers. It is done in React, using Firebase (authorization, database), TS, MUI, React hook forms.",
  },
  {
    id: 3,
    image: PIMG02,
    title: "ToDoApp on js",
    github: "https://github.com/Anderboi/mb-todo-app",
    link: "https://anderboi.github.io/mb-todo-app/",
    description_ru:
      "ToDo приложение, сделанное как тестовое задание для MindBox, по ТЗ и макету. Сделано на React, с применением typescript, classnames(npm) и добавлением небольшого количества тестов.",
    description:
      "ToDo application, made as a test task for MindBox, on specification and layout. Made in React, using typescript, classnames(npm) and adding a small number of tests.",
  },
  {
    id: 4,
    image: PIMG03,
    title: "'Samurai' social network",
    github: "https://github.com/Anderboi/react_social",
    link: "https://anderboi.github.io/react_social/",
    description_ru:
      "Учебный проект по React. Небольшая социальная сеть. Функционал не весь, но больше чем в самом курсе.Сам дописывал логику добавления друзей, обмена сообщениями.",
    description:
      "React training project. A small social network. The functionality is not all, but more than in the course itself. I implemented the logic of adding friends and messaging.",
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
