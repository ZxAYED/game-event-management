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
import News from './Components/Services/News';
import AuthProvider from './Components/Provider/AuthProvider';
import CardDetails from './Components/Home/CardDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import PrivateRoute from './Components/Provider/PrivateRoute';
import ServiceDetails from './Components/Services/ServiceDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>{return fetch('/api.json')}
    },
    {
      path:'/Services',
      element:<Services/>,
      loader:()=>{return fetch('/services.json')},
     
    },
    {
      path:'/News',
      element:<PrivateRoute><News/></PrivateRoute>,
      loader:()=>{return fetch('/news.json')},
     
    },
      {
      path:'/Register',
      element:<Register></Register>
    },
  
      {
      path:'/SignIn',
      element:<LogIN></LogIN> 
    },
      {
      path:'/details/:id',
      element:<PrivateRoute><CardDetails/></PrivateRoute>,
      loader:()=>{  return fetch('/api.json')} 
    },
      {
      path:'/service/:id',
      element:<PrivateRoute><ServiceDetails/></PrivateRoute>,
      loader:()=>{  return fetch('/services.json')} 
    },
      
  
  
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
