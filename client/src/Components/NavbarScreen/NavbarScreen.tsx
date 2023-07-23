import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { MdOutlineNotificationsNone } from 'react-icons/md';

const NavbarScreen = () => {
  return (
    <nav className='flex justify-between items-center p-5 border-b rounded-b-2xl h-20'>
      <div className='flex'>
        <Link to={'/'} className='bg-bluePrimary text-white px-8 py-2 rounded-md'>Logo</Link>
      </div>
      <div className='flex items-center'>
        <div className='hidden md:flex gap-6 ml-10 text-lg text-azulPrimary'>
          <Link to={'/'} className=''>Sobre nosotros</Link>
          <Link to={'/'} className=''>Contacto</Link>
        </div>
        <button className='hidden md:block bg-azulPrimary text-white p-3 rounded-full text-2xl ml-10'>
          <MdOutlineNotificationsNone/>
        </button>
        <div className='md:hidden border-2 p-2 border-bluePrimary text-bluePrimary rounded-md text-xl'>
          <GrMenu/>
        </div>
      </div>
    </nav>
  );
};

export default NavbarScreen;
