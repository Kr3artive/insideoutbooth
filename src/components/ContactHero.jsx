import React from 'react'
import { FaPhone } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"

const ContactHero = () => {
  return (
    <div className='flex gap-2 justify-center text-sm sticky bg-black text-white'>
        <a className='flex items-center' href=""><FaPhone/>+234-7062987803</a>
        <a className='flex items-center' href=""><IoLogoInstagram/>@theinsideoutbooth</a>
    </div>
  )
}

export default ContactHero
