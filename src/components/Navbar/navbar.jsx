import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="p-5 bg-gray-100 ">
        <div className="container flex justify-between items-center">
        <Link href='/' className="font-semibold text-xl">
          E-MAll
        </Link>
        <ul className='flex items-center gap-8'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/category">Category</Link></li>
          <li><Link href="/new_arrival">New Arrival</Link></li>
          <li><Link href="/trending">Trending</Link></li>
        </ul>
        <div className="">
          <Link href='/cart'>My Cart</Link>
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
