import React from 'react'
import './about.css'

import ME from '../../assets/me-about.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
        </div>

        <p>
        I'm a Student and a Developer !!
        🥅 Currently studying at Jyothi Engineering College.
        👯 Looking to collaborate with other developers.
        🌱 Current Goal: To develop indie games.
        🔭 Fun Fact: I love to draw pixel arts and play games.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </section>
  )
}

export default About