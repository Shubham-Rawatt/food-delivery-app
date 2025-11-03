import { IoMdMenu } from "react-icons/io";
import { MdFreeBreakfast, MdOutlineFoodBank } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
 
 const Categories = [

    {
        id:1,
        name : 'All',
        image : <IoMdMenu className="w-15 h-15 text-green-500"/>
    } ,

        {
        id:2,
        name : 'Breakfast',
        image :<MdFreeBreakfast className="w-15 h-15 text-green-500"/>
    },

        {
        id:3,
        name : 'Soup',
        image :  <LuSoup className=" h-15 text-green-500 w-15"/>
    },

        {
        id:4,
        name : 'Pasta',
        image : <CiBowlNoodles className="w-15 h-15 text-green-500"/>
    },

        {
        id:5,
        name : 'Main Course',
        image : <MdOutlineFoodBank className="w-15 h-15 text-green-500"/>
    },
        {
        id:6,
        name : 'Pizza',
        image : <GiFullPizza className="w-15 h-15 text-green-500"/>
    },
        {
        id:7,
        name : 'Burger',
        image : <GiHamburger  className="w-15 h-15 text-green-500"/>
    },


]

  export default Categories