import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPersonVcard } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbNotes } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import logoNC from '../../../public/Logo NC.png'

const Aside = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/user');

  const [isOpen, setIsOpen] = useState(false);
  const handleNavLinkClick = (route : string) => {
    setActiveLink(route);
    navigate(route);

    if (route === '/user/crear-equipos') {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false); 
    }
  };



  const equipos = [
    {
      group: 'Recursos humanos',
      id: 1
    }, 
    {
      group: 'Digital team', 
      id: 2 
    },
    {  
      group: 'Marketing', 
      id: 3
    },
    {
      group: 'Backend Developers',
      id: 4
    }
  ]

  return (
    <div className='border-r rounded-br-3xl w-80 py-6 flex flex-col justify-between bg-greyPrimary2 shadow-xl'>



      <div className='pl-4'>  
        {/* ----------------------------------------------------- Information: */}
        <div className='pr-4 ml-4'>
          <div className='flex justify-between'>
            <div className='bg-blue-950 w-52 h-52 rounded-xl flex items-center justify-center'>
              <img src={logoNC} alt="" className=''/>
            </div>
            <button className='flex text-2xl text-bluePrimary'>
              <BiLogOut />
            </button>
          </div>
          <p className='text-xl font-bold mt-4 mb-10'>No Country</p>
        </div>
        {/* ----------------------------------------------------- Links: */}
        <div className='mb-32'>
          {/* --------------------------------------------------- Link: Dashboard */}
          <Link
            to={'/user'}
            onClick={() => handleNavLinkClick('/user')}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 border-x-greyPrimary2 py-2 px-3  ${
              activeLink === '/user'
                ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                : ''
            }`}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user' ? '!bg-bluePrimary text-white' : ''
              }`}
            >
              <LuLayoutDashboard />
            </div>
            Dashboard
          </Link>
          {/* --------------------------------------------------- Link: Administrar Roles */}
          <Link
            to={'/user/ranking-rol'}
            onClick={() => handleNavLinkClick('/user/ranking-rol')}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/ranking-rol'
                ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                : ''
              }`}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user/ranking-rol'
                  ? '!bg-bluePrimary text-white'
                  : ''
              }`}
            >
          
              <BsPersonVcard />
            </div>
            Administrar Roles
          </Link>
          {/* --------------------------------------------------- Link: Administrar Equipos */}
          <div>
            <Link 
              to={'/user/crear-equipos'} 
              onClick={() => handleNavLinkClick('/user/crear-equipos')}
              className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
                activeLink === '/user/crear-equipos'
                  ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                  : ''
              }`}
            >
              <div>
                <div className='flex gap-x-2'>
                <div
                  className={`bg-greyPrimary1 p-2 rounded-full ${
                    activeLink === '/user/crear-equipos'
                      ? '!bg-bluePrimary text-white'
                      : ''
                  }`}
                >
                  <FaPeopleGroup />
                </div>
                <p className="flex items-center gap-x-12">
                  Administrar Equipos {isOpen ? <BiSolidChevronUp/> : <BiSolidChevronDown/>}
                </p>

                </div>
              </div>
            </Link>
            <div>
              {isOpen && (
                <div className='flex flex-col pl-14 border-l text-sm border-gray-400'>
                  {equipos.map(equipo => {
                    return(
                      <Link to={'/user'} key={equipo.id} className='py-2'>{equipo.group}</Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
          {/* --------------------------------------------------- Link: Formularios */}
          <Link
            to={'/user/forms'}
            onClick={() => handleNavLinkClick('/user/forms')}
            className={`flex items-center justify-between gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/forms'
                ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                : ''
            }`}
          >
            <div className='flex items-center gap-x-2'>
              {/* ----- Icon */}
              <div
                className={`bg-greyPrimary1 p-2 rounded-full ${
                  activeLink === '/user/forms'
                    ? '!bg-bluePrimary text-white'
                    : ''
                }`}
              >
                <TbNotes />
              </div>
              {/* ----- Link */}
              Formularios
            </div>
            {/* ----- Coutn Forms */}
            <p className='bg-orangePrincipal text-white h-5 w-5 flex justify-center items-center rounded-full text-sm mr-2'>3</p>
          </Link>
          {/* --------------------------------------------------- Link: Perfil */}
          <Link
            to={'/user/profile'}
            onClick={() => handleNavLinkClick('/user/profile')}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/profile'
                ? 'bg-azulClaroBg !border-bluePrimary text-bluePrimary'
                : ''
            }`}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user/profile'
                  ? '!bg-bluePrimary text-white'
                  : ''
              }`}
            >
              <GoPerson />
            </div>
            Perfil
          </Link>
        </div>
      </div>


      {/* ----------------------------------------------------- Cerrar sesión: */}
      <button className='bg-azulClaroBg2 text-azulPrimary flex items-center justify-center gap-x-2 text-sm py-2 mx-6 rounded-lg'>
        <AiOutlinePoweroff /> 
        <p className=''>Cerrar sesión</p>
      </button>



    </div>
  );
};

export default Aside;
