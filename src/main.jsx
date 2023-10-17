import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Home/Navbar';
import Root from './layouts/Root';
import Error from './components/Error';
import AddProducts from './components/AddProducts';
import MyCart from './components/MyCart';
import Login from './components/Login';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Navbar></Navbar>
      },
      {
        path:"/addProducts",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/myCart",
        element:<MyCart></MyCart>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
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
