import React from 'react'
import './experience.css'
import { StackItem } from './StackItem'
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiAdobephotoshop,
  SiFirebase,
  SiNextdotjs,
} from 'react-icons/si'

const stack = [
  {
    id: 1,
    name: 'HTML',
    icon: <SiHtml5 className='skills__item__icon' />,
    proficiency: 'Intermediate',
  },
  {
    id: 2,
    name: 'CSS',
    icon: <SiCss3 className='skills__item__icon' />,
    proficiency: 'Intermediate',
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <SiJavascript className='skills__item__icon' />,
    proficiency: 'Intermediate',
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: <SiTypescript className='skills__item__icon' />,
    proficiency: 'Beginer',
  },
  {
    id: 5,
    name: 'React',
    icon: <SiReact className='skills__item__icon' />,
    proficiency: 'Intermediate',
  },
  {
    id: 6,
    name: 'Redux',
    icon: <SiRedux className='skills__item__icon' />,
    proficiency: 'Intermediate',
  },
  {
    id: 7,
    name: 'Next js',
    icon: <SiNextdotjs className='skills__item__icon' />,
    proficiency: 'Beginer',
  },
  {
    id: 8,
    name: 'Firebase',
    icon: <SiFirebase className='skills__item__icon' />,
    proficiency: 'Intermediate',
  },
  {
    id: 9,
    name: 'Figma',
    icon: <SiFigma className='skills__item__icon' />,
    proficiency: 'Experienced',
  },
  {
    id: 10,
    name: 'Photoshop',
    icon: <SiAdobephotoshop className='skills__item__icon' />,
    proficiency: 'Experienced',
  },
]

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <h5 className='sub-subheader'>What Skills I Have</h5>
      <h2 className='subheader'>My Stack</h2>

      <div className='container experience'>
        <div className='experience__frontend'>
          <h3 className='experience__frontend__header'>Fronend Development</h3>
          <div className='skills'>
            {stack.map((tech) => {
              return <StackItem key={tech.id} tech={tech}></StackItem>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
