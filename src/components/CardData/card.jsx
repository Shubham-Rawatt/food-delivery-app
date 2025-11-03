import React from 'react'
import img1 from '../../assets/images/image1.avif';
import { LuLeafyGreen } from 'react-icons/lu';
import { GiChickenOven } from 'react-icons/gi';



const Card = ({name , image , id , price, type}) => {
  return (
    <div className='w-76 h-70 p-3 flex flex-col gap-3 shadow-lg'>

    <div className='w-full h-50 overflow-hidden rounded-lg'>
      <img src={image} alt="image 1" className='object-cover'/>
    </div>

    <div className='text-2xl font-semibold'>
      {name}
    </div>

    <div className='flex w-full justify-between items-center'>
      <div className='text-lg font-bold text-green-200'> {price} </div>  
      <div className='flex justify-center items-center gap-3 text-green-200'>{ type==="veg" ? < LuLeafyGreen /> : < GiChickenOven/> } <span>{type}</span></div>
    </div>
    <button className='w-full p-3 bg-green-200 rounded-lg text-gray-500 hover:bg-green-400 transition-all'> Add To Dish</button>
    </div>
  )
}

export default Card