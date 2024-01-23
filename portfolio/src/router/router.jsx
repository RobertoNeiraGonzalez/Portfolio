import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/main/main'
import Project from '../pages/proyecto/proyecto'
import SignInSide from '../pages/login/login'
import Background from '../pages/background/background'

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
  {
    path: '/background',
    element: <Background />
  },



])

export default router