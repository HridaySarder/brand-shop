import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Error from './components/Error';
import AddProducts from './components/AddProducts';
import MyCart from './components/MyCart';
import Login from './components/Login';
import AuthProvider from './providers/AuthProvider';
import Home from './Home/Home';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
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
      },
{
  path:"/register",
  element:<Register></Register>
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
