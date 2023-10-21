import React from 'react'
import logo from "Images/logo.svg"
export default function Navbar() {

    let navbarMenu = ["Home", "Our Services", "Projects", "Blog", "About"]

    return (
        <div className='bg-homePageHeader'>
        <ul className='flex py-5 container mx-auto  justify-between items-center'>
              <img alt='logo'  src={logo}/>
            <div className='gap-4 flex  '>
                {navbarMenu.map((menuItem) => {
                    return (
                        <li key={menuItem}>{menuItem}</li>
                    )
                })}
                <button className='bg-orange px-7 py-2 text-white rounded'>Contact</button>
            </div>
          
        </ul>
        </div>
    )
}
