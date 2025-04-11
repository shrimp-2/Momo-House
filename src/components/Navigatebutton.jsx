import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function Navigatebutton() {
  return (
    <div>
        <NavLink
            className="bg-[#0C6967] p-2  flex   justify-center items-center gap-x-1 w-60   rounded-3xl  text-white  "
            to="/menu"
          >
            Explore Our Menu
            <BsArrowRightShort size={32} className="mt-1" />
          </NavLink>
    </div>
  )
}

export default Navigatebutton