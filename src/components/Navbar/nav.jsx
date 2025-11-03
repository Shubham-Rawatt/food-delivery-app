import React from 'react'
import { FaBowlFood } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";


const Nav = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8 '>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
          <FaBowlFood className='w-8 h-8 text-green-500'/>
            </div>
            <form className='w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md'>
              <IoMdSearch className='w-8 h-8 text-green-500'/>
                <input className='w-full outline-none text-[20px]' type="text"  placeholder='search items...'/>
            </form>
            <div className='relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <span className='absolute top-0 right-2 text-green-400 font-bold text-lg'>0</span>
                 < FaBagShopping className='w-8 h-8 text-green-500'/>
            </div>

    </div>
  )
}

export default Nav