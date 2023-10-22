import { NavLink } from "react-router-dom"
import {GoHome} from 'react-icons/go'
import {BiWallet} from 'react-icons/bi'
import {BsBarChart} from 'react-icons/bs'
import {IoMdAdd} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'
export const Navbar = () => {
  return (
    <>
     

         <nav
        className="w-full bg-transparent text-white  fixed bottom-0 md:top-0 p-6 md:rounded-none md:w-fit md:p-5 z-50"
      >
        <ul
          className="flex flex-row gap-10 justify-evenly md:flex-col md:justify-center h-full"
        >
          <li className="text-3xl">
           <NavLink to='.' end className={({isActive}) => isActive ? 'active' : null}>
             <GoHome  />
           </NavLink>
          </li>
          <li>
            <NavLink to='expenseStat' className={({isActive}) => isActive ? 'active' : null}>
               <BiWallet className="text-3xl"/>
            </NavLink>
          </li>
          <li
            className="relative -top-12 button-bg-add rounded-full text-white w-16 h-16 flex items-center justify-center md:-top-0 md:-right-12"
          >

            <NavLink to='addexpense' className={({isActive}) => isActive ? 'active' : null}>
              <IoMdAdd className="text-[1.8rem]"/>
            </NavLink>
          </li>
          <li>
               <NavLink to='expenseList' className={({isActive}) => isActive ? 'active' : null}>
                 <BsBarChart className="text-3xl"/>
               </NavLink>
          </li>
          <li>
           <NavLink to='about' className={({isActive}) => isActive ? 'active' : null}>
              <BiUser className="text-3xl"  />
           </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

