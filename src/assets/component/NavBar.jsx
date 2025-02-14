import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>

<div className="navbar bg-linear-to-t from-sky-500 to-indigo-500">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost normal-case text-2xl text-white hover:bg-fuchsia-950">Fishing Project</Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      
    </div>
    <div className="dropdown dropdown-end mt-5">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src="https://i.ibb.co/Kpk22PKy/mafu.jpg" alt="Mafu" />
        </div>
      </label>
      <ul tabIndex={0} className="space-y-2 bg-linear-to-t from-indigo-500 to-sky-500 text-white font-bold  hover:text-blue-300 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
        <li>
          <hr />
          <Link to={"/"} className="justify-between">
            All Month
           
          </Link>
          <hr />
        </li>
        <li><Link to={"/addProduct"}>Add New Project</Link></li>
        <hr />
        
        
      </ul>
    </div>
  </div>
</div>


    </div>
  )
}
