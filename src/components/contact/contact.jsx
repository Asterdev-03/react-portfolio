import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>askme@gmail.com</h5>
            <a href="mailto:askme@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill />
            <h4>Messenger</h4>
            <h5>hellotutorials</h5>
            <a href="http://m.me/earnest.achiever" rel='noreferrer' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="http://api.whatsapp.com/send?phone+123456789" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="17" placeholder='Your Message' required></textarea>
          <button type='sumbit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact