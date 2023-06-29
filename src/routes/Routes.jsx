import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Login/SignUp'
import DashBoardLayout from '../layouts/DashBoardLayout'
import Profile from '../pages/Dashboard/Profile/Profile'
import AddPrintInfo from '../pages/AddPrintInfo/AddPrintInfo'
import AllPrints from '../pages/Dashboard/AllPrints/AllPrints'
import AllPayment from '../pages/Dashboard/AllPayment/AllPayment'
import Userprint from '../pages/Dashboard/User/UserPrint/Userprint'
import AddPayment from '../pages/AddPayment/AddPayment'

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
      },
      {
        path:'/addprintinfo',
        element: <AddPrintInfo/>
      },
      {
        path: '/addpayment',
        element: <AddPayment/>
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
      },
      {
        path: 'allprintinginfo',
        element: <AllPrints/>
      },
      {
        path: 'allpaymentinfo',
        element: <AllPayment/>
      },
      {
        path: 'userprintinfo',
        element: <Userprint/>
      }
    ]
  }
])
