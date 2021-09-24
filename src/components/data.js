import React from "react";
import {FaLinkedin, FaInstagram} from 'react-icons/fa';
import {AiFillFacebook} from 'react-icons/ai';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'about me'
  },
  {
    id: 2,
    url: '/education',
    text: 'education'
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects'
  },
  {
    id: 4,
    url: '/aBitMore',
    text: 'a bit more'
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact'
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/abhishekpauler/',
    icon: <FaLinkedin />
  },
  {
    id: 2,
    url: 'https://www.facebook.com/thepaulsays/',
    icon: <AiFillFacebook />
  },
  {
    id: 3,
    url: 'https://www.instagram.com/abhishekpawl/',
    icon: <FaInstagram />
  }
]