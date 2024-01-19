import './proyecto.css'
import MediaCard from '../../components/CardProject/CardProject'
import { getAllProjects } from '../../services/project.services'

import { useEffect, useState } from 'react'

function Project() {

  const [projects, setProjects] = useState([])
  console.log(projects)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllProjects()
      setProjects(result)
    }
    fetchData()
  }, [])

  const projectsShowFunc = () => {
    return projects.map(project => {
      return (
        <MediaCard project={project} key={project.id} />
      )
    })
  }

  return (
    <div className='background'>
      {projectsShowFunc()}
    </div>
  )
}

export default Project