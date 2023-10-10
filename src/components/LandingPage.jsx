import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";
import { Link } from "react-scroll";
import emailjs from '@emailjs/browser';

function LandingPage({isModalOpen, setIsModalOpen}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

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
    <section id="landing-page" className={isModalOpen ? "modal__open" : undefined}>
      <nav className="nav">
        <a className="nav__logo">Ruben.dev</a>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a className="nav__link--anchor">
              About
            </a>
          </li>
          <li className="nav__link">
            <Link to="projects" className="nav__link--anchor">
              Projects
            </Link>
          </li>
          <li className="nav__link">
            <a className="nav__link--anchor" onClick={() => setIsModalOpen(!isModalOpen)}>
              Contact
            </a>
          </li>
          <a className="btn">Resume</a>
        </ul>
        </nav>
      <header className="header">
        <h1 className="header__small--text">Hi, my name is</h1>
        <h2 className="header__big--text">Ruben Garcia.</h2>
        <h3 className="header__big--text">I build things for the web</h3>
        <p className="header__para">
          I'm a Software Engineer with a strong passion for building web
          applications with great user experiences. Here's a bit more{" "}
          <a className="blue underline">about me</a>.
        </p>
        <div className="social__link--list">
          <a
            href="https://github.com/rgarci82"
            target="_blank"
            className="social__link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/ruben-garcia-734090179/"
            target="_blank"
            className="social__link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </header>
      <Link to="techstack" className="scroll">
        <div className="scroll__icon click"></div>
      </Link>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about">
            Frontend Software Engineer.
          </h4>
          <p className="modal__para modal__para--about">
            I'm a 21 year-old <b className="blue">frontend software engineer</b> with
            a strong passion for developing websites with great
            <b className="blue">user experiences.</b>
            <br />
            I currently work on extremely difficult engineering problems and
            learn from a team consisting of some of the most
            <b className="blue">talented</b> and
            <b className="blue">experienced</b> software engineers every day.
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
    </section>
  );
}

export default LandingPage;
