import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { openDrawer } from '../../../app/Slices/drawerSlice'
import MenuIcon from '../../../assests/menuicon.svg';
import ImageLog from '../../../assests/login_image.jpg'
const Navbar = () => {
  const dispatch=useDispatch()
    const oDrawer=()=>{
        dispatch(openDrawer())
    }

  return (
    <div className="bg-gray-900 navbar ">
  <div className="flex-none lg:hidden">
    <button className="btn btn-square btn-ghost" onClick={()=>oDrawer()}>
     <img src={MenuIcon} className="inline-block w-5 h-5 stroke-current" />
    </button>
  </div>
  <div className="justify-center flex-1">
    <a className="text-white cursor-pointer fs-4 text-decoration-none">House Of Tutors</a>
  </div> 
  {/* <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="bg-black rounded-full btn btn-ghost btn-circle">
        <div className="w-20 h-20 rounded-full">
          <img src={ImageLog} className='rounded-full'/>
        </div>
      </label> 
     <ul tabIndex="0" className="gap-2 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li >
          <NavLink className="justify-between hover:bg-blue-600 text-primary" to='/dashboard' end>
            Profile
            <span className="badge">New</span>
          </NavLink>
        </li>
        <li><NavLink to='/' className='hover:bg-blue-600 hover:text-primary'>Logout</NavLink></li>
      </ul> 
    </div>
  </div> */}
</div>
  )
}

export default Navbar