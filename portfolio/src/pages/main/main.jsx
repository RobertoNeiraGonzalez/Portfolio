import './main.css'

import TypingEffect from '../../components/Name/Name'

import { useState, useEffect } from 'react'

import Divider from '@mui/material/Divider'


function Main() {

  const [showSecondTypingEffect, setShowSecondTypingEffect] = useState(false);
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
        <h1>ROBERTO NEIRA</h1>
      </div>

      <Divider sx={{ borderColor: '#CAB84A', marginTop: 2 }} />

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
      </div>

    </>
  );
}

export default Main