import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/main/main'
import Project from '../pages/proyecto/proyecto'
import SignInSide from '../pages/login/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project',
    element: <Project />
  },
  {
    path: '/login',
    element: <SignInSide />
  },



])

export default router