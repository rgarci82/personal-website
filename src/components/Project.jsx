import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Project({ image, title, subtitle, para, githubLink, websiteLink}) {
  return (
    <li className='project'>
        <div className="project__wrapper">
            <img src={image} alt="" className='project__img'/>
            <div className="project__wrapper--bg"></div>
            <div className="project__description">
                <h3 className='project__description--title'>{title}</h3>
                <h4 className='project__description--subtitle'>{subtitle}</h4>
                <p className='project__description--para'>{para}</p>
                <div className="project__description--links">
                  <a
                    href={githubLink}
                    target="_blank"
                    className="project__description--link"
                   >
                  <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={websiteLink}
                    target="_blank"
                    className="project__description--link"
                   >
                  <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
            </div>
        </div>
    </li>
  )
}

export default Project