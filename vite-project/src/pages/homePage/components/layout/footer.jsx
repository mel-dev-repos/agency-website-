import React from 'react'
import logo from "../../../../assets/images/whiteLogo.svg"
import vimeo from "Images/footer/vimeo.svg"
import linkedin from "Images/footer/linkedin.svg"
import dribble from "Images/footer/dribble.svg"
import twitter from "Images/footer/twitter.svg"
import facebook from "Images/footer/facebook.svg"
export default function Footer() {

  let footerMenu = ["Home", "About us", "Portfolio", "Contact Me", "Privacy Policy",]
  let footerIcons = [
    {
      pic: vimeo,
      alt: "vimeo"
    },
    {
      pic: linkedin,
      alt: "linkedin"
    },
    {
      pic: dribble,
      alt: "dribble"
    },
    {
      pic: twitter,
      alt: "twitter"
    },
    {
      pic: facebook,
      alt: "facebook"
    },
  ]
  return (
    <div className='bg-brown flex p-10 flex-col '>
      <img className='text-white mx-auto' src={logo} />
      <div className='flex justify-center gap-8 mt-10 '>
        {footerMenu.map((item) => {
          return (
            <span className='text-white' key={item}>{item}</span>
          )
        })}
      </div>
      <div className='border w-full mt-10 border-[#A39189]'></div>
      <div className='flex flex-row-reverse gap-4 mt-10 justify-start'>
        {footerIcons.map(({ pic, alt }) => {
          return (

            <img key={alt} src={pic} alt={alt} />

          )
        })}
      </div>
    </div>
  )
}
