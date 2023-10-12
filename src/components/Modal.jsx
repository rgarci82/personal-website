import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import picture from '../assets/eport (1).jpg'
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

function Modal({isModalOpen, setIsModalOpen}) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      const loading = document.querySelector('.modal__overlay--loading');
      const success = document.querySelector('.modal__overlay--success');

      loading.classList += " modal__overlay--visable"
  
      emailjs.sendForm('service_mrmm8ln', 'template_xsod9jz', form.current, 'T1xOmRs6tCBAKRMan')
        .then((result) => {
            loading.classList.remove("modal__overlay--visable");
            success.classList += (" modal__overlay--visable");
        }, (error) => {
            loading.classList.remove("modal__overlay--visable");
            alert(
              "The email service is temporarily unavailable. Please contact me directly on ruben.garcia30102@gmail.com"
            )
        })
      }

  return (
    <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit about me.
          </h3>
          <figure className="modal__picture--mask">
            <img src={picture} alt="" className="modal__picture"/>
          </figure>
          <h4 className="modal__sub-title modal__sub-title--about">
            Full Stack Software Engineer.
          </h4>
          <p className="modal__para modal__para--about">
            I'm a 21 year-old <b className="blue">full stack software engineer</b> with
            a strong passion for developing websites with great
            <b className="blue"> user experiences.</b>
            <br />
            I currently work on extremely difficult engineering problems and
            learn from a team consisting of some of the most
            <b className="blue"> talented</b> and
            <b className="blue"> experienced</b> software engineers every day.
          </p>
        </div>
        <div className="modal__half modal__contact">
          <FontAwesomeIcon className="modal__exit" icon={faTimes} onClick={() => setIsModalOpen(!isModalOpen)}/>
          <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
          <h4 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities
          </h4>
          <form id="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input className="input" name="user_name" type="text" required></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">E-mail</label>
              <input className="input" name="user_email" type="email" required></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea className="input" name="message" type="text" required ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">Send it my way</button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <FontAwesomeIcon icon={faSpinner} className="fa-spinner"/>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        </div>
      </div>
  )
}

export default Modal