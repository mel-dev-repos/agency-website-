import React from 'react'
import pro1 from "Images/projects1.svg"
import pro2 from "Images/projects2.svg"
export default function PreviewProject() {
    return (
        <div className='p-5'>
            <h2 className='font-bold'>Our Projects</h2>
            <div className='flex justify-between'>
                <span>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</span>
                <button className='bg-[#F4ECE0] text-orange px-5 py-2 rounded-md '>See More</button>
            </div>
            <div className='flex justify-center gap-8'>
                <div className='bg-[#F5E6FE] rounded-lg flex flex-col items-center'>
                    <span className='font-bold text-2xl text-center'>Watch - Product Responsive<br /> Landing Page
                    </span>
                    <img src={pro1} />
                </div>
                <div className='bg-[#F4ECE0] rounded-lg flex flex-col items-center'>
                    <img src={pro2} />
                </div>
            </div>
        </div>
    )
}
