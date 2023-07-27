import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import Logo from '../../../public/Logo.png'

const NavbarHome = () => {
  return (

    <nav className='flex justify-between items-center p-5 border-b rounded-b-2xl h-20'>
      <div className='flex items-center'>
        <div className='flex'>
          <Link to={'/user'} className='w-32 ml-10 md:ml-24 mr-5'> <img src={Logo} alt="" /> </Link>
        </div>
        <div className='hidden md:flex gap-6 ml-10 text-lg text-bluePrimary'>
          <Link to={'/'} className=''>Sobre nosotros</Link>
          <Link to={'/'} className=''>Contacto</Link>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='hidden md:block'>
          <Link to={'/login'} className='bg-orangeTertiary border border-orangePrincipal px-4 py-2 text-orangePrincipal rounded-3xl'>Iniciar sesión</Link>
          <Link to={'/register'} className='bg-orangePrincipal border border-orangePrincipal px-4 py-2 text-white rounded-3xl ml-5'>Registrarse</Link>
        </div>
        <div className='md:hidden border-2 p-2 border-bluePrimary rounded-md text-xl text-bluePrimary'>
          <GrMenu/>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;