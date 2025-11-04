import React from 'react'
import Nav from '../../components/Navbar/nav'
import  Categories  from '../../Category'
import Card from '../../components/CardData/card'
import { food_items } from '../../Food'


const Home = () => {
  return (
<>
        <div className='border-t-slate-300 w-full min-h-screen'>
            <Nav/>
           <div className="flex flex-wrap justify-center items-center w-full gap-6">
            {
            Categories.map((category) =>(
              <div key={category.id} className="w-32 h-32 flex flex-col items-center justify-center p-3 text-lg text-gray-500 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all">
              {category.image}
              {category.name}
              </div>
            ))
            }
          </div> 

          <div className='w-full flex flex-wrap gap-5 px-4 justify-center items-center pt-5 pb-5'>
            {food_items.map( (item) =>
            <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
            )}
          </div>

        </div>
        </>
)
}

export default Home