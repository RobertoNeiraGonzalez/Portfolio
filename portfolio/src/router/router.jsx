import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Project from '../pages/Home/Projects/Project'

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