import React from "react";
import Project from "../Project";
import disneyclone from "../../assets/disneyclone.PNG";
import teslaclone from "../../assets/teslaclone.PNG";
import ecommerce from "../../assets/ecommerce.JPG";
import treact from "../../assets/treactclone.JPG";

function Projects({ image, title, subtitle, para, githubLink, websiteLink }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="blue">projects</span>
          </h1>
          <ul className="project__list">
            <Project
              title={"Treact Clone"}
              image={treact}
              subtitle={"HTML, CSS, JavaScript"}
              githubLink={"https://github.com/rgarci82/Treact-Website-Clone"}
              websiteLink={"https://rgarci82.github.io/Treact-Website-Clone/"}
              para={
                "Created a clone of the Treact Template using only HTML, CSS"
              }
            />
            <Project
              title={"E-Commerce"}
              image={ecommerce}
              subtitle={"HTML, CSS, JavaScript, React"}
              githubLink={"https://github.com/rgarci82/E-Commerce"}
              websiteLink={"https://e-commerce-54su00ix1-rgarci82.vercel.app/"}
              para={
                "I created a E-Commerce website for books. You are able to browse through best selling books and add them to a cart."
              }
            />
            <Project
              title={"Tesla Clone"}
              image={teslaclone}
              subtitle={"React, Redux, Firebase"}
              githubLink={"https://github.com/rgarci82/Tesla-Clone"}
              websiteLink={"https://tesla-clone-31ff3.web.app/"}
              para={
                'I created a clone of the Tesla website using React, Redux, and Firebase. Users are able to create an account and login using Firebase Authentication to look at their "Tesla Accounts".'
              }
            />
            <Project
              title={"Disney+ Clone"}
              image={disneyclone}
              subtitle={"React, Redux, Firebase, Styled Components"}
              githubLink={"https://github.com/rgarci82/Disney-Clone"}
              websiteLink={"https://disney-clone-64b2c.web.app/"}
              para={
                "I created a clone of the Disney+ website using React, Redux, Styled Components, and Firebase. Users are able to login using their Google accounts with Firebase Authentication to browse the website."
              }
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
