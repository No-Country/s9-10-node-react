import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import { BiSolidChevronDown, BiCheckShield } from "react-icons/bi";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineNotificationsNone } from 'react-icons/md';
import Logo from '../../../public/Logo.png'
import { useState } from 'react';

const NavbarScreen = () => {

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className='flex justify-between items-center p-5 border-b rounded-b-2xl h-20'>
      <div className='flex'>
        <Link to={'/'} className='w-32 ml-6'> <img src={Logo} alt="" /> </Link>
      </div>
      <div className='flex items-center'>
        <div className='hidden md:flex gap-6 ml-10 text-lg text-bluePrimary'>
          <Link to={'/'} className=''>Sobre nosotros</Link>
          <Link to={'/'} className=''>Contacto</Link>
        </div>
        <div className='hidden md:block relative'>
          <div className='bg-orangePrincipal w-4 h-4 rounded-full absolute right-0 top0'></div>
          <button 
            className='bg-bluePrimary text-white p-3 rounded-full text-2xl ml-10'
            onClick={openModal}
          ><MdOutlineNotificationsNone/></button>



   

      {showModal && (
        <div className="fixed top-20 right-0  bg-violetQuaternary w-96 p-10 rounded-bl-3xl z-10">
          <div className='flex items-center justify-between mb-6'>
            <p className='text-xl font-bold text-violetPrimary'>Notificaciones</p>
            <button
              className="text-xl"
              onClick={closeModal}
            >
              <GrClose/>
            </button>
          </div>
          <hr />
          <div className='flex my-4'>
            <div className='text-orangePrincipal bg-white p-2 rounded-full w-8 h-8 border border-l-greyPrimary1 flex items-center justify-center text-base'><BsFileEarmarkCheckFill/></div>
            <p className='text-base font-semibold ml-4'>El formulario de <span className='text-violetPrimary'>Backend</span> ha sido completado por el <span className='text-violetPrimary'>75% de los empleados</span></p>
          </div>
          <hr />
          <div className='flex my-4'>
            <div className='text-orangePrincipal bg-white p-2 rounded-full w-8 h-8 border border-l-greyPrimary1 flex items-center justify-center text-base'><BsFileEarmarkCheckFill/></div>
            <p className='text-base font-semibold ml-4'>El formulario de <span className='text-violetPrimary'>Backend</span> ha sido completado por el <span className='text-violetPrimary'>75% de los empleados</span></p>
          </div>
          <Link to={'/'} className='flex items-center justify-center text-violetPrimary border-2 border-violetPrimary px-4 py-1 rounded-3xl w-32 mx-auto mt-10'>Ver más <BiSolidChevronDown/></Link>
          <hr />



        </div>
      )}


          
        </div>


        <div className="h-screen z-10">
          <button
            className="absolute top-4 right-4 p-2 rounded-md border-2 border-bluePrimary text-bluePrimary text-xl md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <GrClose /> : <GrMenu />}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-greyPrimary2 pt-14 ml-24">
              <button
                className="absolute top-4 right-4 p-2 rounded-md border-2 border-bluePrimary text-bluePrimary text-xl md:hidden"
                onClick={closeMenu}
              >
                <GrClose />
              </button>


              <div className='p-10'>
                <div className='block md:hidden relative'>
                  <div className='bg-orangePrincipal w-3 h-3 rounded-full absolute  left-8'></div>
                  <div className='bg-bluePrimary text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center'>
                    <MdOutlineNotificationsNone/>
                  </div>
                </div>


                <p className='text-xl font-bold my-5'>Notificaciones</p>
                <hr />
                <div className='flex my-4'>
                  <div className='text-orangePrincipal bg-white p-2 rounded-full w-8 h-8 border border-l-greyPrimary1 flex items-center justify-center text-base'><BsFileEarmarkCheckFill/></div>
                  <p className='text-base font-semibold ml-4'>El formulario de <span className='text-violetPrimary'>Backend</span> ha sido completado por el <span className='text-violetPrimary'>75% de los empleados</span></p>
                </div>
                <hr />
                <div className='flex my-4'>
                  <div className='text-orangePrincipal bg-white p-2 rounded-full w-8 h-8 border border-l-greyPrimary1 flex items-center justify-center text-base'><BsFileEarmarkCheckFill/></div>
                  <p className='text-base font-semibold ml-4'>El formulario de <span className='text-violetPrimary'>Backend</span> ha sido completado por el <span className='text-violetPrimary'>75% de los empleados</span></p>
                </div>
                <Link to={'/'} className='flex items-center justify-center text-violetPrimary border-2 border-violetPrimary px-4 py-1 rounded-3xl w-32 mx-auto my-5'>Ver más <BiSolidChevronDown/></Link>
                <hr />
                <p className='text-xs my-4'>Información</p>

                <Link to={'/'} className='text-gray-500 flex items-center gap-x-1 text-base my-2'>
                  <div className='bg-gray-100 p-2 text-xl rounded-full text-gray-700'><BiCheckShield/></div>
                  <p className=''>Sobre Nosotros</p>
                </Link>
                <Link to={'/'} className='text-gray-500 flex items-center gap-x-1 text-base my-2'>
                  <div className='bg-gray-100 p-2 text-xl rounded-full text-gray-700'><AiOutlineComment/></div>
                  <p>Contacto</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarScreen;
