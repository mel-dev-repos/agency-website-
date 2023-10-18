import React from 'react'
import HeaderBg from "../../../../assets/images/homepage-header-pic.svg"
import Navbar from '../navbar'
export default function Header() {
  return (
    <div className='bg-homePageHeader '>
      <Navbar />
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-[4rem] text-center'>We Build Digital Product <br />
          For Your Success </h1>
        <div className='flex gap-4 '>
          <button className='bg-orange text-white p-5 rounded-md'>Get Started</button>
          <button className='bg-[#F4D3A1] text-orange rounded-md'>Watch Demo</button>
        </div>
        <img src={HeaderBg} />
      </div>

    </div>
  )
}
