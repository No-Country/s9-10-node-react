import { Link, useNavigate } from "react-router-dom"
import { BiLogOut } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPersonVcard } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbNotes } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useState } from "react";

const Aside = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/user');

  const handleNavLinkClick = (route) => {
    setActiveLink(route);
    // Navegar a la ruta deseada
    navigate(route);
  };

  return (
    <div className="h-screen border-r rounded-br-3xl w-80 pl-4 py-6 flex flex-col justify-between bg-greyPrimary2 shadow-xl">
      <div>
        <div className="pr-4">
          <div className="flex justify-between">
            <div className="w-52 h-52 bg-azulClaroBg rounded-2xl">
            </div>
            <button className="flex text-2xl">
              <BiLogOut/>
            </button>
          </div>
          <p className="text-xl font-bold mt-4 mb-10">Nombre de la empresa</p>
        </div>
        <div>
          <Link 
            to={'/user'} 
            className={`flex items-center gap-x-2 text-lg my-2 border-l-4 border-greyPrimary2 border-x-greyPrimary2 py-2 px-3 ${activeLink === '/user' ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary' : ''}`} 
            onClick={() => handleNavLinkClick('/user')}
          >
            <div className={`bg-greyPrimary1 p-2 rounded-full ${activeLink === '/user' ? '!bg-azulSecundary text-white' : ''}`}>
              <LuLayoutDashboard/>
            </div>
          Dashboard</Link>
          <Link 
            to={'/user/ranking-rol'} 
            className={`flex items-center gap-x-2 text-lg my-2 border-l-4 border-greyPrimary2 py-2 px-3 ${activeLink === '/user/ranking-rol' ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary' : ''}`} 
            onClick={() => handleNavLinkClick('/user/ranking-rol')}
          >
            <div className={`bg-greyPrimary1 p-2 rounded-full ${activeLink === '/user/ranking-rol' ? '!bg-azulSecundary text-white' : ''}`}>
              <BsPersonVcard/>
            </div>
          Administrar Roles</Link>
          <Link 
            to={'/user/ranking-equipos'} 
            className={`flex items-center gap-x-2 text-lg my-2 border-l-4 border-greyPrimary2 py-2 px-3 ${activeLink === '/user/ranking-equipos' ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary' : ''}`} 
            onClick={() => handleNavLinkClick('/user/ranking-equipos')}
          >
            <div className={`bg-greyPrimary1 p-2 rounded-full ${activeLink === '/user/ranking-equipos' ? '!bg-azulSecundary text-white' : ''}`}>
              <FaPeopleGroup/>
            </div>
          Administrar Equipos</Link>
          <Link 
            to={'/user/form'} 
            className={`flex items-center gap-x-2 text-lg my-2 border-l-4 border-greyPrimary2 py-2 px-3 ${activeLink === '/user/form' ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary' : ''}`} 
            onClick={() => handleNavLinkClick('/user/form')}
          >
            <div className={`bg-greyPrimary1 p-2 rounded-full ${activeLink === '/user/form' ? '!bg-azulSecundary text-white' : ''}`}>
              <TbNotes/>
            </div>
          Formularios</Link>
          <Link 
            to={'/user/profile'} 
            className={`flex items-center gap-x-2 text-lg my-2 border-l-4 border-greyPrimary2 py-2 px-3 ${activeLink === '/user/profile' ? 'bg-azulClaroBg !border-azulPrimary text-azulSecundary' : ''}`} 
            onClick={() => handleNavLinkClick('/user/profile')}
          >
            <div className={`bg-greyPrimary1 p-2 rounded-full ${activeLink === '/user/profile' ? '!bg-azulSecundary text-white' : ''}`}>
              <GoPerson/>
            </div>
          Perfil</Link>
        </div>
      </div>
      <button className="bg-azulClaroBg2 flex justify-center items-center gap-4 py-2 mr-4 rounded-x!l text-azulPrimary rounded-md"><AiOutlinePoweroff/> Cerrar sesión</button>
    </div>
  )
}

export default Aside
