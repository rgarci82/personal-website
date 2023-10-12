import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function MenuBackDrop({setIsBackDropOpen, isBackDropOpen, setIsModalOpen, isModalOpen}) {

  return (
    <div className='menu__backdrop'>
        <button className='btn__menu btn__menu--close' onClick={() => setIsBackDropOpen(!isBackDropOpen)}>
            <FontAwesomeIcon icon={faTimes}/>
        </button>
        <ul className='menu__links'>
            <li className='menu__list'>
                <a className='menu__link' onClick={() => setIsModalOpen(!isModalOpen)}>
                    About
                </a>
            </li>
            <li className='menu__list'>
                <a href="#projects" className='menu__link'>
                    Projects
                </a>
            </li>
            <li className='menu__list' onClick={() => setIsModalOpen(!isModalOpen)}>
                <a className='menu__link'>
                    Contact
                </a>
            </li>
            <li className='menu__list'>
                <a href="" className='menu__link'>
                    Resume
                </a>
            </li>
        </ul>
    </div>
  )
}

export default MenuBackDrop