import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8 '>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <span className='w-[30px] h-[30px] text-green-500'> MdFastFood images icons</span>
            </div>
            <form className='w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md'>
                <span className='text-green-500 w-5 h-5'>search icon</span>
                <input className='w-full outline-none text-[20px]' type="text"  placeholder='search items...'/>
            </form>
            <div className='relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <span className='absolute top-0 right-2 text-green-400 font-bold text-lg'>0</span>
                <p className='w-[30px] h-[30px] text-green-500'>shopping icons</p>
            </div>

    </div>
  )
}

export default Nav