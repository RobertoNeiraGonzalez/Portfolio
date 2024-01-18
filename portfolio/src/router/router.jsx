import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/main/main'
import Project from '../pages/proyecto/proyecto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'project',
    element: <Project />
  }
])

export default router