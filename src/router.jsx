import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './assets/MainLayout';

import AddProduct from './assets/component/AddProduct';
import Home from './assets/component/Home';
import { January } from './assets/component/January';

import { March } from './assets/component/March';
import { April } from './assets/component/April';
import { May } from './assets/component/May';
import { June } from './assets/component/June';
import { July } from './assets/component/July';
import { August } from './assets/component/August';
import { September } from './assets/component/September';
import { Octobor } from './assets/component/Octobor';
import { Nov } from './assets/component/Nov';
import { Dec } from './assets/component/Dec';
import { Feb } from './assets/component/Feb';
import { JanuaryUpdate } from './assets/component/JanuaryUpdate';
import { FebUp } from './assets/component/FebUp';
import { MarchUp } from './assets/component/marchUp';
import { DecUp } from './assets/component/DecUp';
import { NovUp } from './assets/component/NovUp';
import { OctUp } from './assets/component/OctUp';
import { SepUp } from './assets/component/SepUp';
import { AugUp } from './assets/component/AugUp';
import { JulyUp } from './assets/component/JulyUp';
import { JuneUp } from './assets/component/JuneUp';
import { ApUp } from './assets/component/ApUp';
import { MayUp } from './assets/component/MayUp';



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
        },
        {
          path:"/january",
          element:<January></January>
        },
        {
          path:"/feb",
          element:<Feb></Feb>
        },
        {
          path:"/march",
          element:<March></March>
        },
        {
          path:"/april",
          element:<April></April>
        },
        {
          path:"/may",
          element:<May></May>
        },
        {
          path:"/june",
          element:<June></June>
        },
        {
          path:"/july",
          element:<July></July>
        },
        {
          path:"/aug",
          element:<August></August>
        },
        {
          path:"/sep",
          element:<September></September>
        },
        {
          path:"/oct",
          element:<Octobor></Octobor>
        },
        {
          path:"/nov",
          element:<Nov></Nov>
        },
        {
          path:"/dec",
          element:<Dec></Dec>
        },
        {
          path:"/janUpdate/:id",
          element:<JanuaryUpdate></JanuaryUpdate>
        },
        {
          path:"/febUpdate/:id",
          element:<FebUp></FebUp>
        },
        {
          path:"/marchUpdate/:id",
          element:<MarchUp></MarchUp>
        },
        {
          path:"/ApUpdate/:id",
          element:<ApUp></ApUp>
        },
        {
          path:"/MayUpdate/:id",
          element:<MayUp></MayUp>
        },
        {
          path:"/juneUpdate/:id",
          element:<JuneUp></JuneUp>
        },
        {
          path:"/julyUpdate/:id",
          element:<JulyUp></JulyUp>
        },
        {
          path:"/augUpdate/:id",
          element:<AugUp></AugUp>
        },
        {
          path:"/sepUpdate/:id",
          element:<SepUp></SepUp>
        },
        {
          path:"/octUpdate/:id",
          element:<OctUp></OctUp>
        },
        {
          path:"/novUpdate/:id",
          element:<NovUp></NovUp>
        },
        {
          path:"/decUpdate/:id",
          element:<DecUp></DecUp>
        },



        
      ]
    },
  ]);
export default router  
