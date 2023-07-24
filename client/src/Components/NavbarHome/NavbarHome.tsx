import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';

const NavbarHome = () => {
  return (

    <nav className='flex justify-between items-center p-5 border-b rounded-b-2xl h-20'>
      <div className='flex items-center'>
        <div className=''>
        <Link to={'/user'} className='bg-bluePrimary text-white px-8 py-2 rounded-md'>Logo</Link>
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