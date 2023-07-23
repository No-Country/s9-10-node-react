import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPersonVcard } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbNotes } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from 'react';

const Aside = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/user');

  const handleNavLinkClick = (route: string) => {
    setActiveLink(route);
    // Navegar a la ruta deseada
    navigate(route);
  };

  return (
    <div className='border-r rounded-br-3xl w-80 py-6 flex flex-col justify-between bg-greyPrimary2 shadow-xl'>
      <div className='pl-4'>  
        <div className='pr-4'>
          <div className='flex justify-between'>
            <div className='w-52 h-52 bg-azulClaroBg rounded-2xl'></div>
            <button className='flex text-2xl'>
              <BiLogOut />
            </button>
          </div>
          <p className='text-xl font-bold mt-4 mb-10'>Nombre de la empresa</p>
        </div>
        <div className='mb-48'>
          <Link
            to={'/user'}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 border-x-greyPrimary2 py-2 px-3 ${
              activeLink === '/user'
                ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary'
                : ''
            }`}
            onClick={() => handleNavLinkClick('/user')}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user' ? '!bg-azulSecundary text-white' : ''
              }`}
            >
              <LuLayoutDashboard />
            </div>
            Dashboard
          </Link>
          <Link
            to={'/user/ranking-rol'}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/ranking-rol'
                ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary'
                : ''
            }`}
            onClick={() => handleNavLinkClick('/user/ranking-rol')}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user/ranking-rol'
                  ? '!bg-azulSecundary text-white'
                  : ''
              }`}
            >
              <BsPersonVcard />
            </div>
            Administrar Roles
          </Link>
          <Link
            to={'/user/crear-equipos'}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/crear-equipos'
                ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary'
                : ''
            }`}
            onClick={() => handleNavLinkClick('/user/crear-equipos')}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user/ranking-equipos'
                  ? '!bg-azulSecundary text-white'
                  : ''
              }`}
            >
              <FaPeopleGroup />
            </div>
            Administrar Equipos
          </Link>
          <Link
            to={'/user/forms'}
            className={`flex items-center gap-x-2 text-lg border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/forms'
                ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary'
                : ''
            }`}
            onClick={() => handleNavLinkClick('/user/forms')}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user/forms'
                  ? '!bg-azulSecundary text-white'
                  : ''
              }`}
            >
              <TbNotes />
            </div>
            Formularios
          </Link>
          <Link
            to={'/user/profile'}
            className={`flex items-center gap-x-2 text-lg my-2 border-l-4 border-greyPrimary2 py-2 px-3 ${
              activeLink === '/user/profile'
                ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary'
                : ''
            }`}
            onClick={() => handleNavLinkClick('/user/profile')}
          >
            <div
              className={`bg-greyPrimary1 p-2 rounded-full ${
                activeLink === '/user/profile'
                  ? '!bg-azulSecundary text-white'
                  : ''
              }`}
            >
              <GoPerson />
            </div>
            Perfil
          </Link>
        </div>
      </div>
      <button className='bg-azulClaroBg2 text-azulPrimary flex items-center justify-center gap-x-2 text-sm py-2 mx-6 rounded-lg'>
        <AiOutlinePoweroff /> 
        <p className=''>Cerrar sesión</p>
      </button>
    </div>
  );
};

export default Aside;
