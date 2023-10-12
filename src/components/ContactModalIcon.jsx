import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactModalIcon({isModalOpen, setIsModalOpen}) {
  return (
    <a href='#'>
    <button className='mail__btn click' onClick={() => setIsModalOpen(!isModalOpen)}>
        <FontAwesomeIcon icon={faEnvelope}/>
    </button>
    </a>
  )
}

export default ContactModalIcon