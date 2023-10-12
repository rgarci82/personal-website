import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MenuBackDrop from "../MenuBackDrop";
import Modal from "../Modal";

function LandingPage({isModalOpen, setIsModalOpen}) {

  const [isBackDropOpen, setIsBackDropOpen] = useState(false)
  
  return (
    <section id="landing-page" className={[isModalOpen ? "modal__open" : undefined] + " " + [isBackDropOpen ? "menu--open" : undefined]}>
      <nav className="nav">
        <a className="nav__logo">RubenGarcia.dev</a>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a className="nav__link--anchor" onClick={() => setIsModalOpen(!isModalOpen)}>
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
        <button className="btn__menu" onClick={() => setIsBackDropOpen(!isBackDropOpen)}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <MenuBackDrop setIsBackDropOpen={setIsBackDropOpen} isBackDropOpen={isBackDropOpen} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
        </nav>
      <header className="header">
        <h1 className="header__small--text">Hi, my name is</h1>
        <h2 className="header__big--text">Ruben Garcia.</h2>
        <h3 className="header__big--text">I build things for the web</h3>
        <p className="header__para">
          I'm a Software Engineer with a strong passion for building web
          applications with great user experiences. Here's a bit more{" "}
          <a className="blue underline" onClick={() => setIsModalOpen(!isModalOpen)}>about me</a>.
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
      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
    </section>
  );
}

export default LandingPage;
