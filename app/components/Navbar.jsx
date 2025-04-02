"use server"
import Link from 'next/link'
import React from 'react'

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {


  return (
    <ClerkProvider>

      <div className=' w-full bg-white  z-40 shadow-md '>
        <div className='w-full max-w-[1240px] mx-auto h-[60px] flex justify-between  items-center'>
          <div className='font-bold flex items-center'>
            <div className='text-[#007BFF]'>
              ToolCrib
            </div>
          </div>

          <div className='hidden mx-auto md:flex md:gap-4 lg:gap-6 text-md'>
            <Link href={'/'}>Home</Link>
            <Link href={'/Store'}>Store</Link>
            <a href={'/Store/create'}>Add-Product</a>
            <Link href={'/dashboard'}>Profile</Link>
            <Link href={'/contactus'}>Contact Us</Link>
          </div>


          <div className='flex gap-2'>
            <SignedOut>
              <div className='bg-pri rounded-sm text-sm p-2 text-white '>
                <SignInButton />

              </div>
              <div className='bg-pri rounded-sm text-sm p-2 text-white '>
                <SignUpButton />

              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* <div className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </div> */}

          {/* <div className='hidden md:flex gap-3'>
            {!IsLogin ? (
              <Link href={'/login'}>
                <button className='px-4 py-1 rounded-full bg-purple-900 text-white'>Login</button>
              </Link>
            ) : (
              <button onClick={navbarchanger} className='px-4 py-1 rounded-full bg-purple-900 text-white'>Logout</button>
            )}
            {IsLogin && isAdmin && (
              <Link href={'/create'} className='px-4 py-1 rounded-full bg-purple-900 text-white'>Create Event</Link>
            )}
          </div> */}
        </div>
        {/* Hamburger */}
        {/* {menuOpen && (
          <div className='md:hidden bg-white w-full flex flex-col items-center py-4 gap-4 shadow-md'>
            <Link href={'/'} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href={'/events'} onClick={() => setMenuOpen(false)}>Explore Events</Link>
            <Link href={'/committees'} onClick={() => setMenuOpen(false)}>Committees</Link>
            <Link href={'/dashboard'} onClick={() => setMenuOpen(false)}>Profile</Link>
            <Link href={'/aboutus'} onClick={() => setMenuOpen(false)}>About Us</Link>
            {!IsLogin ? (
              <Link href={'/login'} onClick={() => setMenuOpen(false)}>
                <button className='px-4 py-1 rounded-full bg-purple-900 text-white'>Login</button>
              </Link>
            ) : (
              <button onClick={navbarchanger} className='px-4 py-1 rounded-full bg-purple-900 text-white'>Logout</button>
            )}
            {IsLogin && isAdmin && (
              <Link href={'/create'} onClick={() => setMenuOpen(false)} className='px-4 py-1 rounded-full bg-purple-900 text-white'>Create Event</Link>
            )}
          </div>
        )} */}
      </div>
    </ClerkProvider>
  )
}

export default Navbar