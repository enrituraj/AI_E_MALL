"use client";

import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { BiCategory } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
const Navbar = () => {


  return (
    <>
      <nav className="p-5 bg-gray-100   w-full z-10">
        <div className="container flex justify-between items-center">
          <Link href='/' className="font-semibold text-xl">
            E-MAll
          </Link>

          <ul className='hidden md:flex items-center gap-8'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/new_arrival">New Arrival</Link></li>
            <li><Link href="/trending">Trending</Link></li>
          </ul>

          {/* mobile nav  */}
          {/* <ul className='fixed z-10 flex items-center bottom-0 bg-slate-300 w-full p-4 left-0 md:hidden gap-8'>
            <li className="flex-1 "><Link className='block py-2 my-1' href="/">
            <TiHome className='text-2xl m-auto bg-slate-400 hover:bg-slate-800' />
            <span className='text-sm text-center'>Home</span>
              </Link></li>
            <li className="flex-1"><Link className='block py-2 my-1' href="/category">
              <BiCategory/>
              <span>Category</span>
              </Link></li>
            <li className="flex-1"><Link className='block py-2 my-1' href="/new_arrival">
            <CiLocationArrow1 />
              <span>New Arrival</span>
              </Link></li>
            <li className="flex-1"><Link className='block py-2 my-1' href="/trending">
              <FaFireAlt/>
              <span>Trending</span>
              </Link></li>
          </ul> */}
          <div className=" md:hidden z-10 flex items-center justify-between px-10 fixed bottom-0 left-0 w-full py-5 bg-gray-100">
            <div className="flex justify-between gap-12">
              <Link href="/" className="text-xl text-[#69628a]">
                <TiHome className='text-xl'/>
              </Link>
              <Link href="/category" className="text-xl text-[#69628a]">
                <BiCategory className='text-xl'/>
              </Link>
              
            </div>
            <Link href="/cart" className='absolute top-0 left-1/2 -translate-y-1/3 -translate-x-1/2 flex items-center justify-center rounded-full shadow-xl shadow-black/30 w-[3.5rem] h-[3.5rem] bg-black text-white'>

            <FaShoppingCart
                className="text-2xl "></FaShoppingCart>
           
            </Link>
            <div className="flex justify-between gap-12">
              <Link href="/new_arrival" className="text-xl text-[#69628a]">
                <CiLocationArrow1 className='text-xl'/>
              </Link>
              <Link href="/trending" className="text-xl text-[#69628a]">
                <FaFireAlt className='text-xl'/>
              </Link>
              
            </div>
        </div>

          <div className="flex items-center ">
            <Link href='/cart' className=' hidden md:block relative'>
              <FaShoppingCart className='text-2xl text-gray-600' />
              <p className='absolute -top-4 -right-4 px-2 py-1 text-sm bg-red-400 text-white rounded-full '>5</p>
            </Link>
          

            <Link className=" rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8" href="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
