import React from 'react'
import blueIcon from "Images/blueIcon.svg"
import creamIcon from "Images/creamIcon.svg"
import purpleIcon from "Images/purpleIcon.svg"
export default function PreviewProvides() {

    let mainBoxes = [
        { title: "App Design", desc: "Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet", icon: blueIcon, bg: "#E3F8FA" },
        { title: "Web Design", desc: "Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet", icon: creamIcon, bg: "#F4ECE0" },
        { title: "Web Development", desc: "Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet", icon: purpleIcon, bg: "#F5E6FE" }
    ]

    return (
        <div className='mt-10 '>
            <h2 className='font-bold  '>What We Provide</h2>
            <div className='flex justify-between '>
                <span className=''>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</span>
                <button className='bg-[#F4ECE0] text-orange px-5 py-2 rounded-md mb-4  '>See More</button>
            </div>
            <div className='flex justify-center gap-8'>
                {mainBoxes.map((item) => {
                    return <div key={item.title} className={` flex p-8 flex-col w-[20rem]  items-center col-span-1 rounded-lg`} style={{background: item.bg}}>
                        <img src={item.icon} /> 
                        <h1 className='font-bold'>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
