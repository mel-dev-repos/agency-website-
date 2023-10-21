import React from 'react'
import pro1 from "Images/projects1.svg"
import pro2 from "Images/projects2.svg"
export default function PreviewProject() {
    return (
        <div className=' mt-10'>
            <h2 className='font-bold '>Our Projects</h2>
            {/* <span className='border-[#F4D3A1] border-2'></span> */}
            <div className='flex justify-between '>
                <span className=''>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</span>
                <button className='bg-[#F4ECE0] text-orange px-5 py-2 rounded-md  '>See More</button>
            </div>

            <div className='flex justify-center gap-8'>
                <div className='bg-[#F5E6FE] rounded-lg flex flex-col items-center'>
                    <span className='font-bold text-2xl mt-10 text-center'>Watch - Product Responsive<br /> Landing Page
                    </span>
                    <img src={pro1} />
                </div>

                <div className='bg-[#F4ECE0] rounded-lg flex flex-col items-center '>
                    <span className='font-bold text-2xl text-center mt-10'>SEO Agency - Creative
                    <br />   Landing Page
                    </span>
                    <img src={pro2}  className='mt-[4.8rem] px-10'/>
                </div>

            </div>
        </div>
    )
}
