import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './components/Root.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,


    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
        // element: <Orders></Orders>
      }
      // {
      //   path: '/profile',
      //   element: 
      // }
    ]
  },



]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
