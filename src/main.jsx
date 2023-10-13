import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import LogIN from './Components/LogIn/LogIN';
import Services from './Components/Services/Services';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>{return fetch('api.json')}
    },
    {
      path:'/Services',
      element:<Services/>,
      loader:()=>{return fetch('news.json')}
    },
      {
      path:'/Register',
      element:<Register></Register>
    },
  
      {
      path:'/SignIn',
      element:<LogIN></LogIN> 
    },
      
  
  
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
