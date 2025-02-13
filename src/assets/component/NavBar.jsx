import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>

<div className="navbar bg-gradient-to-r from-fuchsia-900 to-purple-500">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl text-white hover:bg-fuchsia-950">Fishing Project</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      
    </div>
    <div className="dropdown dropdown-end mt-5">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/src/assets/mafu.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="space-y-2 bg-gradient-to-r from-fuchsia-900 to-purple-500 text-white hover:text-blue-300 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
        <li>
          <hr />
          <Link to={"/"} className="justify-between">
            Profile
           
          </Link>
          <hr />
        </li>
        <li><Link to={"/addProduct"}>Add New Project</Link></li>
        <hr />
        <li><a>Logout</a></li>
        <hr />
      </ul>
    </div>
  </div>
</div>


    </div>
  )
}
