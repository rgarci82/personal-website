import React from "react";
import { Link } from "react-scroll";

function LandingPage() {
  return (
    <section id="landing-page">
      <nav className="nav">
        <Link className="nav__logo">Ruben.dev</Link>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link to="" className="nav__link--anchor">
              About
            </Link>
          </li>
          <li className="nav__link">
            <Link to="" className="nav__link--anchor">
              Projects
            </Link>
          </li>
          <li className="nav__link">
            <Link to="" className="nav__link--anchor">
              Contact
            </Link>
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
      </header>
    </section>
  );
}

export default LandingPage;