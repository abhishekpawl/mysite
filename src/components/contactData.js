import React from "react";
import {FaLinkedin, FaFacebookSquare, FaInstagram, FaGithub} from 'react-icons/fa';

export const contactData = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/abhishekpauler/',
    media: 'LinkedIn',
    icon: <FaLinkedin />
  },
  {
    id: 2,
    url: 'https://www.facebook.com/thepaulsays/',
    media: 'Facebook',
    icon: <FaFacebookSquare />
  },
  {
    id: 3,
    url: 'https://www.instagram.com/abhishekpawl/',
    media: 'Instagram',
    icon: <FaInstagram />
  },
  {
    id: 4,
    url: 'https://github.com/abhishekpawl',
    media: 'GitHub',
    icon: <FaGithub />
  }
]