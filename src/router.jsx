import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './assets/MainLayout';
import { Home } from './assets/component/Home';
import AddProduct from './assets/component/AddProduct';



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addProduct",
            element:<AddProduct></AddProduct>
        }
        
      ]
    },
  ]);
export default router  
