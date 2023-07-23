import { Link, useNavigate } from "react-router-dom"
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPersonVcard } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbNotes } from 'react-icons/tb';
import { useState } from "react";


const Toolbar = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('/user');
  
    const [isOpen, setIsOpen] = useState(false);
    const handleNavLinkClick = (route : string) => {
      setActiveLink(route);
      navigate(route);
  
      setIsOpen(!isOpen);

    };
  


    return (
        <div className="fixed bottom-0 w-full md:hidden bg-navBackground flex justify-between items-center px-5 h-16 ">
            <Link 
                to={'/user'} 
                onClick={() => handleNavLinkClick('/user')}
                className={`flex flex-col items-center text-2xl text-textPrimary gap-y-1 border-t-4 border-greyPrimary2 py-2 px-3 w-full ${
                    activeLink === '/user'
                      ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                      : ''
                  }`}
            >
                <LuLayoutDashboard/>
                <p className="text-xs w-16 text-center">Dashboard</p>
            </Link>
            <Link 
                to={'/user/ranking-rol'} 
                onClick={() => handleNavLinkClick('/user/ranking-rol')}
                className={`flex flex-col items-center text-2xl text-textPrimary gap-y-1 border-t-4 border-greyPrimary2 py-2 px-3 w-full ${
                    activeLink === '/user/ranking-rol'
                        ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                        : ''
                }`}
            >
                <BsPersonVcard/>
                <p className="text-xs w-16 text-center">Roles</p>
            </Link>
            <Link 
                to={'/user/crear-equipos'} 
                onClick={() => handleNavLinkClick('/user/crear-equipos')}
                className={`flex flex-col items-center text-2xl text-textPrimary gap-y-1 border-t-4 border-greyPrimary2 py-2 px-3 w-full ${
                    activeLink === '/user/crear-equipos'
                        ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                        : ''
                }`}
            >
                <FaPeopleGroup/>
                <p className="text-xs w-16 text-center">Equipos</p>
            </Link>
            <Link 
                to={'/user/forms'} 
                onClick={() => handleNavLinkClick('/user/forms')}
                className={`flex flex-col items-center text-2xl text-textPrimary gap-y-1 border-t-4 border-greyPrimary2 py-2 px-3 w-full ${
                    activeLink === '/user/forms'
                        ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                        : ''
                }`}
            >
                <TbNotes/>
                <p className="text-xs w-16 text-center">Formulario</p>
            </Link>
        </div>
    )
}

export default Toolbar
