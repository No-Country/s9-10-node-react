import { Link } from 'react-router-dom';

const NavbarScreen = () => {
  return (
    <nav className='flex justify-between'>
      <div className='flex'>
        <Link to={'/'} className='mr-4'>Logo</Link>
        <div className='hidden md:flex'>
          <Link to={'/'} className='mr-4'>Lorem</Link>
          <Link to={'/'} className='mr-4'>Lorem</Link>
          <Link to={'/'} className='mr-4'>Lorem</Link>
        </div>
      </div>
      <div className=''>
        <div className='hidden md:block'>
          <Link to={'/'} className='mr-4'>Login</Link>
          <Link to={'/'}>Logout</Link>
        </div>
        <div className='md:hidden'>
          <p>Icono</p>
        </div>
      </div>
    </nav>
  );
};

export default NavbarScreen;
