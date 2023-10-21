import Navbar from './components/navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar /> 
            <div className=''>
                {children}

            </div>

            <Footer />
        </div>
    )
}
