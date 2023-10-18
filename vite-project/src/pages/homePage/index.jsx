import CompanyLogo from "Images/CompanyLogo.svg"
import PreviewProject from "./components/previewProject"
const HomePage = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[4rem] text-center'>We Build Digital Product <br />
                    For Your Success </h1>
                <div className='flex gap-4 mt-10 '>
                    <button className='bg-orange text-white px-6 py-3 rounded-md'>Get Started</button>
                    <button className='bg-[#F4D3A1] text-orange px-6 py-3 rounded-md'>Watch Demo</button>
                </div>
                <img src={HeaderBg} className='mb-10 mt-[-15rem]' />
            </div>
            <div>
                {/* <img className='mx-auto mt-20 ' src={CompanyLogo} /> */}
                <PreviewProject />
            </div>

        </div>
    )
}

export default HomePage