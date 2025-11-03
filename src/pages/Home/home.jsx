import React from 'react'
import Nav from '../../components/Navbar/nav'
import  Categories  from '../../Category'


const Home = () => {
  return (
<>
        <div className='border-t-slate-200 w-full min-h-screen'>
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
        </div>
        </>
)
}

export default Home