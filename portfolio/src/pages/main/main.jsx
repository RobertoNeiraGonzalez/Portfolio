import './main.css'
import TypingEffect from '../../components/Name/Name'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Main() {

  const [showSecondTypingEffect, setShowSecondTypingEffect] = useState(false)
  const [showThirdTypingEffect, setShowThirdTypingEffect] = useState(false)

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setShowSecondTypingEffect(true);
    }, 1000)

    const timeoutId2 = setTimeout(() => {
      setShowThirdTypingEffect(true);
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
    };
  }, [])

  const textToTypeFirst = 'Proyectos';
  const textToTypeSecond = 'Background';
  const textToTypeThird = 'Contacto'

  return (
    <>
      <div className='title'>
        <h1>ROBERT<Link to='/login'>O</Link> NEIRA</h1>
        <Divider sx={{ borderColor: '#CAB84A', marginTop: 2 }} />
        <h2>Full-Stack Developer</h2>
      </div>

      <div className='container-main'>
        <a href="project">
          <TypingEffect text={textToTypeFirst} />
        </a>
        <a href="background">
          {showSecondTypingEffect && (
            <TypingEffect text={textToTypeSecond} />
          )}
        </a>
        <a href="contacto">
          {showThirdTypingEffect && (
            <TypingEffect text={textToTypeThird} />
          )}
        </a>

        <div className='icon'>
          <Link to='https://github.com/RobertoNeiraGonzalez'>
            <GitHubIcon sx={{ color: '#CAB84A', marginRight: 8 }} />
          </Link>
          <Link to='https://www.linkedin.com/in/robertoneiragonzalez/'>
            <LinkedInIcon sx={{ color: '#CAB84A' }} />
          </Link>

        </div>
      </div>

    </>
  );
}

export default Main