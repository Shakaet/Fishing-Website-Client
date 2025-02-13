import React from 'react'
import { NavBar } from './component/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>

        <NavBar></NavBar>

        <Outlet></Outlet>

         
    </div>
  )
}
