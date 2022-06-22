import React from 'react'
import './services.css'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Servives</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The external scars tell only part of the story.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services