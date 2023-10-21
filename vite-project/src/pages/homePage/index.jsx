import CompanyLogo from "Images/CompanyLogo.svg"
import PreviewProject from "./components/previewProject"
import HeaderBg from "Images/homepage-header-pic.svg"
import PreviewProvides from "./components/previewProvides"
import featureImg from "Images/featureImg.svg"
const HomePage = () => {
    return (
        <div className="">
            <div className="bg-homePageHeader"> 
            <div className='flex flex-col container mx-auto items-center bg-[#F4ECE0]  '>
                <h1 className='font-bold text-[4rem] text-center'>We Build Digital Product <br />
                    For Your Success </h1>
                <div className='flex gap-4 mt-10  '>
                    <button className='bg-orange text-white px-6 py-3 rounded-md'>Get Started</button>
                    <button className='bg-[#F4D3A1] text-orange px-6 py-3 rounded-md'>Watch Demo</button>
                </div>
                <img src={HeaderBg} className='mb-10 mt-[-15rem]' />
            </div>
            </div>
            <div className="container mx-auto">
                <img className='mt-20' src={CompanyLogo} />
                <PreviewProject />
                <PreviewProvides />
            </div>
<div className="flex items-center">
    <h1 className="text-3xl font-bold">Providing The World's Best
User Experiences</h1>
<span>Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas. </span>
    <img  src={featureImg} />
</div>
        </div>
    )
}

export default HomePage