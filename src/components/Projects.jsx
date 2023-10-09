import React from 'react'
import Project from './Project'
import disneyclone from '../assets/disneyclone.PNG'
import teslaclone from '../assets/teslaclone.PNG'

function Projects({ image, title, subtitle, para, githubLink, websiteLink}) {
  return (
    <section id='projects'>
        <div className="container">
            <div className="row">
                <h1 className='section__title'>Here are some of my <span className="blue">projects</span></h1>
                <ul className="project__list">
                  <Project title={"Tesla Clone"}
                    image={teslaclone}
                     subtitle={"React, Redux, Firebase"}
                     githubLink={"https://github.com/rgarci82/Tesla-Clone"}
                     websiteLink={"https://tesla-clone-31ff3.web.app/"}
                     para={'I created a clone of the Tesla website using React, Redux, and Firebase. Users are able to create an account and login using Firebase Authentication to look at their "Tesla Accounts".'}/>
                    <Project title={"Disney+ Clone"}
                    image={disneyclone}
                     subtitle={"React, Redux, Firebase, Styled Components"}
                     githubLink={"https://github.com/rgarci82/Disney-Clone"}
                     websiteLink={"https://disney-clone-64b2c.web.app/"}
                     para={"I created a clone of the Disney+ website using React, Redux, Styled Components, and Firebase. Users are able to login using their Google accounts with Firebase Authentication to browse the website."}/>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Projects