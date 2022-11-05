import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
const date = new Date()

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>&copy; {date.getFullYear()} JSM Headphones All rights reserved</p>
      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer