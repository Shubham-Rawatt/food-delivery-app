import React from 'react'
import { FaBowlFood } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";


const Nav = () => {
  return (

    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
          <FaBowlFood className='w-8 h-8 text-green-500'/>
            </div>
            
            <form className='w-[50%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[60%]'>
              <IoMdSearch className='w-8 h-8 text-green-500'/>
                <input className='w-full outline-none text-gray-900 text-md md:text-2xl' type="text"  placeholder='Search items...'/>
            </form>

            <div className='relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <span className='absolute top-0 right-2 text-green-400 font-bold text-lg'>0</span>
                 < FaBagShopping className='w-8 h-8 text-green-500'/>
            </div>

    </div>

       

  )
}

export default Nav