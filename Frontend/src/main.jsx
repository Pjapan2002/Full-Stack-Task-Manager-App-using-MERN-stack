import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/home/Home.jsx';
import ViewTask from './pages/home/ViewTask.jsx';
import Contactus from './pages/contactus/Contactus.jsx';
import Login from './pages/Signup/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='/viewtask' element={<ViewTask/>} />
      <Route path='/contactus' element={<Contactus/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
