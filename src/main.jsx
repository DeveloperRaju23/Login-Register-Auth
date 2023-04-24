import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Login from './Components/Login/Login.jsx';
import Profile from './Components/Profile/Profile.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/services',
        element: <Services></Services>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/profile',
        element: <Profile></Profile>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

    <App />
  </React.StrictMode>,
)
