import React from 'react'
import HeaderBg from "../../../../assets/images/homepage-header-pic.svg"
import Navbar from '../navbar'
export default function Header() {
  return (
    <div className='bg-homePageHeader '>
      <Navbar />
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-3xl text-center'>We Build Digital Product <br />
          For Your Success </h1>
        <img src={HeaderBg} />
      </div>

    </div>
  )
}
