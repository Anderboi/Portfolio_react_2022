import React from 'react'
import './portfolio.css'
import PIMG01 from '../../assets/controla01.jpg'
import PIMG02 from '../../assets/todo01.jpg'
import PIMG03 from '../../assets/social_media.jpg'
import PIMG04 from '../../assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg'
import PIMG05 from '../../assets/css.jpg'
import Pill from '../base/pill/pill'

const projects = [
  {
    id: 1,
    image: PIMG01,
    stack: [
      'HTML',
      'CSS',
      'JS',
      'TS',
      'React',
      'Redux',
      'React Hook Form',
      'MUI',
      'Firebase',
    ],
    title: 'ControlApp',
    github: 'https://github.com/Anderboi/controla-notnext',
    link: 'https://anderboi.github.io/controla-notnext/#/projects',
    description_ru:
      'Приложение авторского надзора. Пэт-проект, ведения журнала авторского надзора для архитекторов / дизайнеров. Делается на React, с применением Firebase (авторизация, база данных), TS, MUI, React hook forms.',
    description:
      "Application of author's supervision. Pet Project, maintaining a journal of author's supervision for architects / designers. It is done in React, using Firebase (authorization, database), TS, MUI, React hook forms.",
  },
  {
    id: 2,
    image: PIMG02,
    stack: ['HTML', 'CSS', 'JS', 'TS', 'React'],
    title: 'ToDoApp on js',
    github: 'https://github.com/Anderboi/mb-todo-app',
    link: 'https://anderboi.github.io/mb-todo-app/',
    description_ru:
      'ToDo приложение, сделанное как тестовое задание для MindBox, по ТЗ и макету. Сделано на React, с применением typescript, classnames(npm) и добавлением небольшого количества тестов.',
    description:
      'ToDo application, made as a test task for MindBox, on specification and layout. Made in React, using typescript, classnames(npm) and adding a small number of tests.',
  },
  {
    id: 3,
    image: PIMG03,
    stack: ['HTML', 'CSS', 'JS', 'TS', 'React', 'Redux', 'Ajax'],
    title: "'Samurai' social network",
    github: 'https://github.com/Anderboi/react_social',
    link: 'https://anderboi.github.io/react_social/',
    description_ru:
      'Учебный проект по React. Небольшая социальная сеть. Функционал не весь, но больше чем в самом курсе.Сам дописывал логику добавления друзей, обмена сообщениями.',
    description:
      'React training project. A small social network. The functionality is not all, but more than in the course itself. I implemented the logic of adding friends and messaging.',
  },
  {
    id: 4,
    image: PIMG04,
    stack: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    title: 'Students datatable',
    github: 'https://github.com/Anderboi/students-table',
    link: 'https://anderboi.github.io/students-table/',
    description_ru:
      'Учебный проект по JavaScript. CRUD таблица с формой и поиском. Практиковал работу с DOM.',
    description:
      'JavaScript learning project. CRUD table with form and search. Practiced working with DOM.',
  },
  {
    id: 5,
    image: PIMG05,
    stack: ['HTML', 'CSS / SCSS'],
    title: 'CSS Crash Course',
    github: 'https://github.com/Anderboi/CSS_tutorial',
    link: 'https://anderboi.github.io/CSS_tutorial/',
    description_ru:
      'Учебный проект по верстке. Практиковал умение применять flex-box и абсолютное позиционирование, а так же SCSS.',
    description:
      'Educational project on web site layout. Practice using flex-box, absolute positioning and also SCSS.',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='section'>
      <h5 className='sub-subheader'>My Recent Projects</h5>
      <h2 className='subheader'>Portfolio</h2>

      <div className='container portfolio'>
        {projects.map(
          ({id, title, image, description, github, link, stack}) => {
            return (
              <article key={id} className='portfolio__item'>
                <img
                  className='portfolio__item__image'
                  src={image}
                  alt={`portfolio ${id}`}
                />

                <h3 className='portfolio__item__header'>{title}</h3>
                <p className='portfolio__item__description'>{description}</p>
                <div className='portfolio__item__chips'>
                  {stack.map((tech, idx) => {
                    return <Pill key={idx}>{tech}</Pill>
                  })}
                </div>
                <div className='portfolio__item__button-block'>
                  <a href={github} className='btn' target='_blanc'>
                    Github
                  </a>
                  <a href={link} className='btn btn-primary' target='_blanc'>
                    Live Demo
                  </a>
                </div>
              </article>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Portfolio
