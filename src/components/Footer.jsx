import React from 'react'
import {FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className='rounded-div my-4'>
            <div className='flex justify-between items-center px-8 md:px-32 py-4'>
                <FaEnvelope/>
                <FaLinkedin/>
                <FaGithub/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </div>
    </div>
  )
}

export default Footer