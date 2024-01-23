import './Background.css'
import CardBackground from '../../components/CardBackground/CardBackground'
import { getAllbackground } from '../../services/background.services.js'

import { useEffect, useState } from 'react'
import Project from '../proyecto/proyecto.jsx'

function Background() {

  const [background, setBackground] = useState([])
  console.log(background)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllbackground()
      setBackground(result)
    }
    fetchData()
  }, [])

  const backgroundShowFunc = () => {
    return background.map(background => {
      return (
        <CardBackground background={background} key={background.id} />
      )
    })
  }

  return (
    <div className='background'>
      {backgroundShowFunc()}
    </div>
  )
}

export default Background