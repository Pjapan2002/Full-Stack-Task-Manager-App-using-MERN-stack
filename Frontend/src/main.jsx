import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/Home.jsx';
import ViewTask from './pages/ViewTask.jsx';
import Contactus from './pages/Contactus.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

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
