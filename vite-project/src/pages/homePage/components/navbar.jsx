import React from 'react'
import logo from "../../../assets/images/logo.svg"
export default function Navbar() {

    let navbarMenu = ["Home", "Our Services", "Projects", "Blog", "About"]

    return (
        <ul className='flex py-5 px-40 justify-between items-center'>
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
    )
}
