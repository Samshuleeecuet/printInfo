import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Login/SignUp'
import DashBoardLayout from '../layouts/DashBoardLayout'
import Profile from '../pages/Dashboard/Profile/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element:<SignUp/>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoardLayout/>,
    children:[
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  }
])
