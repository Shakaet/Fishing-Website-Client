import React from 'react'
import { NavBar } from './component/NavBar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className='work-sans-font bg-gray-200'>

        <NavBar></NavBar>

        <div className='min-h-screen'>
        <Outlet></Outlet>
        </div>

         
    </div>
  )
}
