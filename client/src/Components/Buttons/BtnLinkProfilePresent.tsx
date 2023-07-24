import { Link } from "react-router-dom"
import { MdOndemandVideo } from 'react-icons/md';
import { GoFileDirectory } from 'react-icons/go';
import { TbFileInvoice } from 'react-icons/tb';


const BtnLinkProfilePresent = () => {
    return (
        <div className="flex gap-x-2">
            <Link to={'/'} className="bg-violetPrimary text-white px-3 md:px-5 py-2 rounded-3xl text-sm md:text-base flex justify-center items-center"><div className="mr-1 md:mr-2"><MdOndemandVideo/></div>Presentación</Link>   
            <Link to={'/'} className="bg-violetPrimary text-white px-3 md:px-5 py-2 rounded-3xl text-sm md:text-base flex justify-center items-center"><div className="mr-1 md:mr-2"><GoFileDirectory/></div>Portafolio</Link>   
            <Link to={'/'} className="bg-violetPrimary text-white px-3 md:px-5 py-2 rounded-3xl text-sm md:text-base flex justify-center items-center"><div className="mr-1 md:mr-2"><TbFileInvoice/></div>Curriculum</Link>   
        </div>
    )
}

export default BtnLinkProfilePresent

